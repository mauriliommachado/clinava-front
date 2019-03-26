import { Component, OnInit, OnDestroy, Input, EventEmitter, Output } from '@angular/core';
import { ProcedureService } from '../../_services';
import { Procedure, Event, Plan } from 'src/app/_models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-procedures',
  templateUrl: './add-procedures.component.html',
  styleUrls: ['./add-procedures.component.css']
})
export class AddProceduresComponent implements OnInit, OnDestroy {
  private eventsSubscription: any
  @Input() events: Observable<Event>;
  @Output() setProcedures: EventEmitter<Procedure[]> = new EventEmitter();

  constructor(private procedureService: ProcedureService) { }

  total: string = "0.00";
  isPaid: boolean = true;

  ngOnInit() {
    this.addedProcedures = new Array();
    this.originalAdd = new Array();
    this.eventsSubscription = this.events.subscribe((e) => {
      if (e) {
        this.procedureService.getAll().subscribe(resp => {
          this.procedures = resp;
          this.original = this.procedures;
        });
        this.event = <Event>e;
        this.event.procedures.forEach(p => {
          this.originalAdd.push(p);
          this.isPaid = false;
        })
        this.addedProcedures = this.originalAdd;
        this.filterPlan();
        this.reset();
      }
    })
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe()
  }

  event: Event;
  original: Procedure[];
  originalAdd: Procedure[];
  procedures: Procedure[];
  addedProcedures: Procedure[];
  filterProcedures: string = "";
  filterAdded: string = "";

  filterPlan() {
    if (this.original) {
      if (this.event.patient.plan) {
        this.original = this.original.filter(p => p.plan.ansCode == this.event.patient.plan.ansCode);
        this.reset();
      }
    } else {
      setTimeout(() => {
        this.filterPlan();
      }, 100)
    }
  }

  add(procedure: Procedure) {
    this.originalAdd.push(procedure);
    this.addedProcedures = this.originalAdd;
    this.reset();
  }

  remove(index: number) {
    this.originalAdd.splice(index, 1);
    this.addedProcedures = this.originalAdd;
    this.reset();
  }

  reset() {
    this.filterAdded = "";
    this.filterProcedures = "";
    this.filterProc();
    this.filterAdd();
    this.setProcedures.emit(this.originalAdd);
    this.total = this.originalAdd.reduce((a, b) => +a + +b.value, 0).toFixed(2);
  }

  filterProc() {
    if (this.filterProcedures.length == 0) {
      this.procedures = this.original;
    } else {
      this.procedures = this.original.filter(p => p.code.toUpperCase().search(this.filterProcedures.toUpperCase()) != -1 || p.name.toUpperCase().search(this.filterProcedures.toUpperCase()) != -1);
    }
  }

  filterAdd() {
    if (this.filterAdded.length == 0) {
      this.addedProcedures = this.originalAdd;
    } else {
      this.addedProcedures = this.originalAdd.filter(p => p.code.toUpperCase().search(this.filterAdded.toUpperCase()) != -1 || p.name.toUpperCase().search(this.filterAdded.toUpperCase()) != -1);
    }
  }
}
