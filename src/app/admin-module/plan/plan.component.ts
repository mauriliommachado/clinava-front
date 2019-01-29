import { Component, OnInit } from '@angular/core';
import { AlertService, PlanService, OperatorService } from '../../_services';
import { Plan, Operator } from '../../_models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
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
export class PlanComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private alertService: AlertService,
    private planService: PlanService,
    private operatorService: OperatorService) { }

  currentPlan: string;
  title: String;
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  show = false;
  editing = false;
  plans: Plan[];
  operators: Operator[];

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      ansCode: ["", Validators.required],
      operator: ["", Validators.required]
    });
    
    this.planService.getAll().subscribe(resp => {
      this.plans = resp;
      this.operatorService.getAll().subscribe(op => {
        this.operators = op;
      })
    });
    this.cleanForm();
    this.title = this.show ? 'Cancelar' : 'Cadastrar';
  }

  get stateList() {
    return this.show ? 'block' : 'none'
  }

  teste() {
    return false;
  }

  toggle() {
    this.submitted = false;
    this.show = !this.show;
    if (this.editing && !this.show) {
      this.cleanForm()
    }
    this.title = this.show ? 'Cancelar' : 'Cadastrar';
    this.planService.getAll().subscribe(resp => this.plans = resp);
  }

  cleanForm() {
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      ansCode: ["", Validators.required],
      operator: ["", Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    let plan = new Plan();
    plan.name = this.registerForm.value.name;
    plan.ansCode = this.registerForm.value.ansCode;
    plan.operator = new Operator();
    plan.operator.ansCode = this.registerForm.value.operator;
    if (this.editing) {
      this.planService.update(plan).subscribe(r => {
        this.alertService.success("Salvo com sucesso.", 5000);
        this.toggle();
        this.cleanForm();
      });
      this.editing = false;
    } else {
      this.planService.register(plan).subscribe(r => {
        this.alertService.success("Salvo com sucesso.", 5000);
        this.toggle();
        this.cleanForm();
      });
    }
  }

  edit(id: string) {
    let plan = new Plan();
    this.planService.getById(id).subscribe(resp => {
      plan = <Plan>resp
      this.registerForm.setValue({
        name: plan.name,
        ansCode: plan.ansCode,
        operator: plan.operator.ansCode
      });
      this.currentPlan = id;
      this.toggle();
      this.editing = true;
    });
  }

  delete(id: string) {
    this.planService.delete(id).subscribe(resp => {
      this.planService.getAll().subscribe(resp => this.plans = resp);
    });
  }

}

