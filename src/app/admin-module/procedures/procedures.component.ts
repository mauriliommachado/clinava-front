import { Component, OnInit } from '@angular/core';
import { AlertService, ProcedureService, PlanService } from '../../_services';
import { Procedure, Plan } from '../../_models';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.css'],
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
export class ProceduresComponent implements OnInit {

  constructor(
    private alertService: AlertService,
    private procedureService: ProcedureService,
    private planService: PlanService) { }

  currentProcedure: string;
  title: String;
  loading = false;
  submitted = false;
  show = false;
  editing = false;
  procedure: Procedure = new Procedure();
  procedures: Procedure[];
  numbers: number[] = new Array();
  codes: string[] = new Array();
  plans: Plan[];


  ngOnInit() {

    this.procedureService.getAll().subscribe(resp => {
      this.procedures = resp;
      this.planService.getAll().subscribe(op => {
        this.plans = op;
        this.numbers = new Array();
        this.codes = new Array();
        this.plans.forEach(p => {
          this.numbers.push(0);
          this.codes.push("");
        });
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
    this.procedureService.getAll().subscribe(resp => this.procedures = resp);
  }

  cleanForm() {

  }


  onSubmit() {
    this.submitted = true;
    let inserts: Procedure[] = new Array();

    this.plans.forEach((p, i) => {
      let procedure = new Procedure();
      procedure.code = this.codes[i];
      procedure.value = this.numbers[i];
      procedure.name = this.procedure.name;
      procedure.plan = this.plans[i];
      inserts.push(procedure);
    });
    console.log(inserts);
    if (this.editing) {
      inserts.forEach(procedure => {
        this.procedureService.update(procedure).subscribe(r => {

        });
      });
      this.alertService.success("Salvo com sucesso.", 5000);
      this.toggle();
      this.cleanForm();
      this.editing = false;
    } else {
      inserts.forEach(procedure => {
        this.procedureService.register(procedure).subscribe(r => {
        });
      });
      this.alertService.success("Salvo com sucesso.", 5000);
      this.toggle();
      this.cleanForm();
    }
  }

  edit(id: string) {
    return;
    /* let procedure = new Procedure();
    this.procedureService.getById(id).subscribe(resp => {
      procedure = <Procedure>resp
      console.log(procedure)

      this.currentProcedure = id;
      this.toggle();
      this.editing = true;
    }); */
  }

  delete(id: string) {
    this.procedureService.delete(id).subscribe(resp => {
      this.procedureService.getAll().subscribe(resp => this.procedures = resp);
    });
  }

}

