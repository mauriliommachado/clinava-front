import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component'
import { HomeRoutingModule } from './home-routing.module';
import { ReceptionComponent } from './reception/reception.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ConsultComponent } from './consult/consult.component';
import { PacientComponent } from './pacient/pacient.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, BrowserModule,
    ReactiveFormsModule,
    HomeRoutingModule, HomeRoutingModule //<-- import
  ],
  declarations: [
    ReceptionComponent,
    AgendaComponent, PacientComponent,
    ConsultComponent, HomeComponent]
})
export class HomeModule { }
