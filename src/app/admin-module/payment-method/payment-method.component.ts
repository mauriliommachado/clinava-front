import { Component, OnInit } from '@angular/core';
import { AlertService, PaymentMethodService } from '../../_services';
import { PaymentMethod } from '../../_models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css'],
  animations: [
    trigger('popOverState', [
      state('none', style({
        display: 'none',
        opacity: 0
      })),
      state('block', style({
        display: 'block',
        opacity: 1
      })),
      transition('block => none', animate('300ms ease-out')),
      transition('none => block', animate('300ms ease-in'))
    ])
  ]
})
export class PaymentMethodComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private alertService: AlertService,
    private paymentMethodService: PaymentMethodService) { }

  currentPaymentMethod: string;
  title: String;
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  show = false;
  editing = false;
  paymentMethods: PaymentMethod[];

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: [""],
      description: ["", Validators.required],
      type: [1, Validators.required],
      installment: [1],
      billingDay: [0],
      discount: [0]
    });
    this.paymentMethodService.getAll().subscribe(resp => this.paymentMethods = resp);
    this.cleanForm();
    this.title = this.show ? 'Cancelar' : 'Cadastrar';
  }

  get stateList() {
    return this.show ? 'block' : 'none'
  }

  toggle() {
    this.submitted = false;
    this.show = !this.show;
    if (this.editing && !this.show) {
      this.cleanForm()
    }
    this.title = this.show ? 'Cancelar' : 'Cadastrar';
    this.paymentMethodService.getAll().subscribe(resp => this.paymentMethods = resp);
  }

  cleanForm() {
    this.registerForm = this.formBuilder.group({
      id: [""],
      description: ["", Validators.required],
      type: [1, Validators.required],
      installment: [1],
      billingDay: [0],
      discount: [0]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    let paymentMethod = <PaymentMethod>this.registerForm.value;
    if (this.editing) {
      this.paymentMethodService.update(paymentMethod).subscribe(r => {
        this.alertService.success("Salvo com sucesso.", 5000);
        this.toggle();
        this.cleanForm();
      });
      this.editing = false;
    } else {
      this.paymentMethodService.register(paymentMethod).subscribe(r => {
        this.alertService.success("Salvo com sucesso.", 5000);
        this.toggle();
        this.cleanForm();
      });
    }
  }

  edit(id: string) {
    let paymentMethod = new PaymentMethod();
    this.paymentMethodService.getById(id).subscribe(resp => {
      paymentMethod = <PaymentMethod>resp
      this.registerForm = this.formBuilder.group({
        id: [paymentMethod.id],
        description: [paymentMethod.description, Validators.required],
        type: [paymentMethod.type, Validators.required],
        installment: [paymentMethod.installment],
        billingDay: [paymentMethod.billingDay],
        discount: [paymentMethod.discount]
      });
      this.currentPaymentMethod = id;
      this.toggle();
      this.editing = true;
    });
  }

  delete(id: string) {
    this.paymentMethodService.delete(id).subscribe(resp => {
      this.paymentMethodService.getAll().subscribe(resp => this.paymentMethods = resp);
    });
  }

}
