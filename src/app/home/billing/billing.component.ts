import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { Event, Procedure, Plan, Operator, PaymentMethod, Bill, BillConstants } from 'src/app/_models';
import { PlanService, OperatorService, PaymentMethodService, BillService, AlertService, EventService } from 'src/app/_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit, OnDestroy {

  @Output() close: EventEmitter<String> = new EventEmitter();
  @Input() event: Event;
  @Input() visible = false;
  @Input() events;
  private eventsSubscription: any;


  constructor(private formBuilder: FormBuilder,
    private plansService: PlanService,
    private operatorService: OperatorService,
    private billService: BillService,
    private payService: PaymentMethodService,
    private eventService: EventService,
    private alertService: AlertService) {
    this.registerForm = this.formBuilder.group({
      operator: [''],
      plan: [''],
      paymentMethod: [''],
      obs: [''],
      bill: ['1']
    });
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      operator: [this.event.patient.plan ? this.event.patient.plan.operator.ansCode : ''],
      plan: [this.event.patient.plan ? this.event.patient.plan.ansCode : ''],
      paymentMethod: [''],
      obs: [''],
      bill: ['1']
    });
  }

  registerForm: FormGroup;
  submitted = false;
  plans: Plan[];
  operators: Operator[];
  payMethod: PaymentMethod[];

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  ngOnInit() {
    this.payService.getAll().subscribe(resp => { this.payMethod = resp; });
    this.eventsSubscription = this.events.asObservable().subscribe((e) => {
      if (e) {
        this.event = <Event>e;
        if (!this.event.patient.plan) {
          this.operatorService.getAll().subscribe(operators => {
            this.operators = operators;
            this.plansService.getAll().subscribe(plans => {
              this.plans = plans;
              this.initForm();
            });
          });
        } else {
          this.plans = new Array();
          this.plans.push(this.event.patient.plan);
          this.operators = new Array();
          this.operators.push(this.event.patient.plan.operator);
          this.initForm();
        }
      }
    })
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    if (this.registerForm.value.bill == 1 && !this.registerForm.value.paymentMethod) {
      alert("Selecione uma forma de pagamento");
      return;
    }
    if (this.registerForm.value.bill == 2 && (!this.registerForm.value.operator || !this.registerForm.value.plan)) {
      alert("Selecione uma operadora e plano");
      return;
    }
    var total = 0;
    this.event.procedures.forEach(p => {
      total += p.value;
    })
    if (total <= 0) {
      alert("O valor mínimo é 0,01 centavos!");
      return;
    }
    var bills:Bill[] = new Array();
    var bill: Bill = this.generateBill(total, new Date());
    if (bill.paymentMethod) {
      if (bill.paymentMethod.discount != 0) {
        bill.value = bill.value * (1 + (bill.paymentMethod.discount / 100));
      }
      if (bill.paymentMethod.type == 2 && bill.paymentMethod.installment > 0) {
        var parcial = <number>new Number((bill.value / bill.paymentMethod.installment).toFixed(2));
        var d = bill.validUntil;
        for (let i = 0; i < bill.paymentMethod.installment; i++) {
          bill.value = parcial;
          bill.validUntil = new Date(d.getFullYear(), d.getMonth()+ i, d.getDate());
          bills.push(Object.assign({}, bill));
        }
      } else {
        bills.push(bill);
      }
    } else {
      bills.push(bill);
    }
    this.event.bills = bills;
      this.eventService.update(this.event).subscribe(resp => {
          this.alertService.success("Faturato com Sucesso!", 5000);
          this.closeModal();
      });
  }

  generateBill(value: number, valid: Date) {
    let form = this.registerForm.value;
    var bill = new Bill();
    var BC = new BillConstants();
    bill.category = BC.CATEGORY_FIXED;
    bill.description = form.obs;
    bill.document = this.event.id;
    bill.event = new Event();
    bill.event.id = this.event.id;
    bill.nature = BC.NATURE_INCOME;
    bill.validUntil = valid;
    if (form.bill == 1) {
      var pm = this.payMethod.find(p => p.id == form.paymentMethod);
      bill.paymentMethod = pm;
      if (pm.type == 1) {
        bill.status = BC.STATUS_CLOSED;
      } else {
        bill.status = BC.STATUS_OPEN;
        if (valid.getDate() >= pm.billingDay) {
          bill.validUntil = new Date(bill.validUntil.getFullYear(), bill.validUntil.getMonth() + 1, pm.billingDay);
        } else {
          bill.validUntil = new Date(bill.validUntil.getFullYear(), bill.validUntil.getMonth(), pm.billingDay);
        }
      }
    } else {
      bill.operator = this.operators.find(p => p.ansCode == form.operator);
      bill.status = BC.STATUS_OPEN;
      if (valid.getDate() >= bill.operator.billingDay) {
        bill.validUntil = new Date(bill.validUntil.getFullYear(), bill.validUntil.getMonth() + 1, bill.operator.billingDay);
      } else {
        bill.validUntil = new Date(bill.validUntil.getFullYear(), bill.validUntil.getMonth(), bill.operator.billingDay);
      }
    }

    bill.value = <number>new Number(value.toFixed(2));
    return bill;
  }

  hide(event) {
    let elementId: string = (event.target as Element).id;
    if (elementId == "customModal" || elementId == "close") {
      this.closeModal();
    }
  }

  closeModal(): void {
    this.visible = false;
    this.close.emit();
  }

  setProcedures(procedures: Procedure[]) {
    this.event.procedures = procedures;
  }

}
