import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './record/record.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddProceduresComponent } from './add-procedures/add-procedures.component';

@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule, FormsModule
  ],
  declarations: [EventComponent, ListComponent, AddProceduresComponent],
  exports: [AddProceduresComponent]
})
export class ClinicModule { }
