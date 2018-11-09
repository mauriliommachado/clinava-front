import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HomeComponent} from './home.component'
import { HomeRoutingModule } from './home-routing.module';
import { ReceptionComponent } from './reception/reception.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ConsultComponent } from './consult/consult.component';
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule, HomeRoutingModule //<-- import
  ],
  declarations: [
    ReceptionComponent,
    AgendaComponent,
    ConsultComponent,HomeComponent]
})
export class HomeModule { }
