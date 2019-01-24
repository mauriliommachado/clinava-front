import { Component, OnInit } from '@angular/core';
import { AlertService, OperatorService } from '../../_services';
import { Operator } from '../../_models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css'],
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
export class OperatorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private alertService: AlertService,
    private operatorService: OperatorService) { }

  currentOperator: string;
  title: String;
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  show = false;
  editing = false;
  operators: Operator[];

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      ansCode: ["", Validators.required],
      billingDay: ["", Validators.required],
      cnpj: ["", Validators.required],
      social: ["", Validators.required]
    });
    this.operatorService.getAll().subscribe(resp => this.operators = resp);
    this.cleanForm();
    this.title = this.show ? 'Cancelar' : 'Cadastrar';
  }

  get stateList() {
    return this.show ? 'block' : 'none'
  }

  teste(){
    return false;
  }

  toggle() {
    this.submitted = false;
    this.show = !this.show;
    if (this.editing && !this.show) {
      this.cleanForm()
    }
    this.title = this.show ? 'Cancelar' : 'Cadastrar';
    this.operatorService.getAll().subscribe(resp => this.operators = resp);
  }

  cleanForm() {
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      ansCode: ["", Validators.required],
      billingDay: ["", Validators.required],
      cnpj: ["", Validators.required],
      social: ["", Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    let operator = <Operator>this.registerForm.value;
    if (this.editing) {
      this.operatorService.update(operator).subscribe(r => {
        this.alertService.success("Salvo com sucesso.", 5000);
        this.toggle();
        this.cleanForm();
      });
      this.editing = false;
    } else {
      this.operatorService.register(operator).subscribe(r => {
        this.alertService.success("Salvo com sucesso.", 5000);
        this.toggle();
        this.cleanForm();
      });
    }
  }

  edit(id: string) {
    let operator = new Operator();
    this.operatorService.getById(id).subscribe(resp => {
      operator = <Operator>resp
      this.registerForm.setValue({
        name: operator.name,
        ansCode: operator.ansCode,
        billingDay: operator.billingDay,
        cnpj: operator.cnpj,
        social: operator.social
      });
      this.currentOperator = id;
      this.toggle();
      this.editing = true;
    });
  }

  delete(id: string) {
    this.operatorService.delete(id).subscribe(resp => {
      this.operatorService.getAll().subscribe(resp => this.operators = resp);
    });
  }

}
