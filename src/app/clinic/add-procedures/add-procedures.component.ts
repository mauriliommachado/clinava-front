import { Component, OnInit, OnDestroy, Input, EventEmitter, Output } from '@angular/core';
import { ProcedureService } from '../../_services';
import { Procedure, Event } from 'src/app/_models';
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

  ngOnInit() {
    this.procedureService.getAll().subscribe(resp => {
      this.procedures = resp;
      this.original = this.procedures;
    });
    this.addedProcedures = new Array();
    this.originalAdd = new Array();
    this.eventsSubscription = this.events.subscribe((e) => {
      if (e) {
        this.event = <Event>e;
        this.filterPlan();
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
      this.original = this.original.filter(p => p.plan.ansCode == this.event.patient.plan.ansCode);
      this.reset();
    }else{
      setTimeout(()=>{
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
