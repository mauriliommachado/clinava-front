import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AgendaComponent} from './agenda/agenda.component'
import {HomeComponent} from './home.component'

const routes: Routes = [{
  path: 'agenda', component: AgendaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
