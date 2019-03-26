import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component'
import { HomeRoutingModule } from './home-routing.module';
import { EventRegisterComponent } from './event-register/event-register.component'
import { AgendaComponent } from './agenda/agenda.component';
import { ConsultComponent } from './consult/consult.component';
import { BillingComponent } from './billing/billing.component';
import { AddProceduresComponent } from '../clinic/add-procedures/add-procedures.component';
import { PatientComponent } from './patient/patient.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2CompleterModule } from "ng2-completer";
import { NgxMaskModule } from 'ngx-mask';
import { ConsultSummaryComponent } from './consult-summary/consult-summary.component';
import { ClinicModule } from '../clinic/clinic.module';

@NgModule({
  imports: [
    CommonModule, BrowserModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
    HomeRoutingModule, HomeRoutingModule, FormsModule, Ng2CompleterModule, ClinicModule
  ],
  declarations: [
    AgendaComponent, PatientComponent,
    ConsultComponent, HomeComponent, EventRegisterComponent, ConsultSummaryComponent, BillingComponent]
})
export class HomeModule { }
