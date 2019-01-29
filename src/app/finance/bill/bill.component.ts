import { Component, OnInit } from '@angular/core';
import { AlertService, BillService, PaymentMethodService } from '../../_services';
import { Bill, PaymentMethod } from '../../_models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
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
export class BillComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private alertService: AlertService,
    private billService: BillService,
    private payService: PaymentMethodService) { }

  currentBill: number;
  title: String;
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  show = false;
  editing = false;
  bills: Bill[];
  payMethod: PaymentMethod[];

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: [""],
      description: ["", Validators.required],
      document: [""],
      validUntil: ["", Validators.required], 
      nature: [1, Validators.required],
      status: [1],
      category: [1],
      value: [0],
      paymentMethod: ["", Validators.required]
    });
    this.billService.getAll().subscribe(resp => {
      this.bills = resp
    });
    this.payService.getAll().subscribe(resp =>{this.payMethod = resp;});
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
    this.billService.getAll().subscribe(resp => this.bills = resp);
  }

  cleanForm() {
    this.registerForm = this.formBuilder.group({
      id: [""],
      description: ["", Validators.required],
      document: [""],
      validUntil: ["", Validators.required],
      nature: [1, Validators.required],
      status: [1],
      category: [1],
      value: [0, Validators.min(0.01)],
      paymentMethod: [, Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    let bill = new Bill();
    bill.category = this.registerForm.value.category;
    bill.description = this.registerForm.value.description;
    bill.document = this.registerForm.value.document;
    bill.nature = this.registerForm.value.nature;
    bill.status = this.registerForm.value.status;
    bill.validUntil = new Date(this.registerForm.value.validUntil);
    bill.value = this.registerForm.value.value;
    bill.paymentMethod = new PaymentMethod();
    bill.paymentMethod.id = this.registerForm.value.paymentMethod;
    if (this.editing) {
      bill.id = this.currentBill;
      this.billService.update(bill).subscribe(r => {
        this.alertService.success("Salvo com sucesso.", 5000);
        this.toggle();
        this.cleanForm();
      });
      this.editing = false;
    } else {
      this.billService.register(bill).subscribe(r => {
        this.alertService.success("Salvo com sucesso.", 5000);
        this.toggle();
        this.cleanForm();
      });
    }
  }

  edit(id: number) {
    let bill = new Bill();
    this.billService.getById(id).subscribe(resp => {
      bill = <Bill>resp
      this.registerForm = this.formBuilder.group({
        id: [bill.id],
        description: [bill.description, Validators.required],
        document: [bill.document],
        validUntil: [bill.validUntil, Validators.required],
        nature: [bill.nature, Validators.required],
        status: [bill.status],
        category: [bill.category],
        value: [bill.value],
        paymentMethod: [bill.paymentMethod.id, Validators.required]
      });
      this.currentBill = id;
      this.toggle();
      this.editing = true;
    });
  }

  delete(id: number) {
    this.billService.delete(id).subscribe(resp => {
      this.billService.getAll().subscribe(resp => this.bills = resp);
    });
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'status' })
export class RepeatPipe implements PipeTransform {
  transform(value: any) {
    if(value == "1"){
      return "ABERTO";
    }else{
      return "FECHADO"
    }
  }
}

@Pipe({ name: 'nature' })
export class NaturePipe implements PipeTransform {
  transform(value: any) {
    if(value == "1"){
      return "RECEITA";
    }else{
      return "DESPESA"
    }
  }
}
