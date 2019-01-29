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
  private eventsSubscription: any

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
      obs: ['']
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
    let form = this.registerForm.value;
    var bill = new Bill();
    var BC = new BillConstants()
    bill.category = BC.CATEGORY_FIXED;
    bill.description = form.obs;
    bill.document = this.event.id;
    bill.event = this.event;
    bill.nature = BC.NATURE_INCOME;
    var pm = new PaymentMethod();
    pm.id = form.paymentMethod;
    bill.paymentMethod = pm;
    bill.status = BC.STATUS_CLOSED;
    bill.validUntil = new Date();
    var total = 0;
    this.event.procedures.forEach(p => {
      total += p.value;
    })
    if(total <= 0){
      alert("O valor mínimo é 0,01 centavos!");
      return;
    }
    bill.value = <number>new Number(total.toFixed(2));
    this.billService.register(bill).subscribe(resp => {
      this.eventService.update(this.event).subscribe(r => {
        this.alertService.success("Faturato com Sucesso!", 5000);
        this.closeModal();
      })
    })
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

  initForm() {
    this.registerForm = this.formBuilder.group({
      operator: [this.event.patient.plan ? this.event.patient.plan.operator.ansCode : '', Validators.required],
      plan: [this.event.patient.plan ? this.event.patient.plan.ansCode : '', Validators.required],
      paymentMethod: ['', Validators.required],
      obs: ['']
    });
  }

  setProcedures(procedures: Procedure[]) {
    this.event.procedures = procedures;
  }

}
