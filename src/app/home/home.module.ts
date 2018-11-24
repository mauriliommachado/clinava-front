import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component'
import { HomeRoutingModule } from './home-routing.module';
import {EventRegisterComponent } from './event-register/event-register.component'
import { ReceptionComponent } from './reception/reception.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ConsultComponent } from './consult/consult.component';
import { PacientComponent } from './pacient/pacient.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2CompleterModule } from "ng2-completer";


@NgModule({
  imports: [
    CommonModule, BrowserModule,
    ReactiveFormsModule,
    HomeRoutingModule, HomeRoutingModule, FormsModule,Ng2CompleterModule
  ],
  declarations: [
    ReceptionComponent,
    AgendaComponent, PacientComponent,
    ConsultComponent, HomeComponent,EventRegisterComponent]
})
export class HomeModule { }
