import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login';
import { ThermComponent } from './therm/therm.component';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { HomeComponent } from './home/home.component';
import { ConsultComponent } from './home/consult/consult.component'
import { AgendaComponent } from './home/agenda/agenda.component';
import { PatientComponent } from './home/patient/patient.component';
import { UserComponent } from './admin-module/user/user.component';
import { ConfigurationComponent } from './admin-module/configuration/configuration.component';
import { AdminComponent } from './admin-module/admin.component';
import { EventComponent } from './clinic/record/record.component';
import { ListComponent } from './clinic/list/list.component';
import { ClinicHome } from './clinic/clinic.component';
import { FinanceHome } from './finance/finance.component';
import { PlanComponent } from './admin-module/plan/plan.component';
import { OperatorComponent } from './admin-module/operator/operator.component';
import { ProceduresComponent } from './admin-module/procedures/procedures.component';
import { PaymentMethodComponent } from './admin-module/payment-method/payment-method.component';
import { BillComponent } from './finance/bill/bill.component';
import { FlowComponent } from './finance/flow/flow.component';
import { BillingComponent } from './home/billing/billing.component';



const appRoutes: Routes = [
  {
    path: 'home', component: IndexComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '', component: HomeComponent,
        children: [
          { path: '', component: AgendaComponent },
          { path: 'agenda', component: AgendaComponent },
          { path: 'agenda/:id', component: AgendaComponent },
          { path: 'consult', component: ConsultComponent },
          { path: 'patient', component: PatientComponent },
          { path: 'billing', component: BillingComponent }
        ]
      }
    ]
  }, {
    path: 'admin', component: IndexComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '', component: AdminComponent,
        children: [
          { path: 'operator', component: OperatorComponent },
          { path: 'plan', component: PlanComponent },
          { path: 'procedures', component: ProceduresComponent },
          { path: 'payment_method', component: PaymentMethodComponent },
          { path: 'user', component: UserComponent },
          { path: 'configuration', component: ConfigurationComponent }
        ]
      }
    ]
  },
  {
    path: 'record', component: IndexComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '', component: ClinicHome,
        children: [
          { path: 'record/:event', component: EventComponent },
          { path: 'record', component: EventComponent },
          { path: 'list', component: ListComponent }
        ]
      }
    ]
  },
  {
    path: 'finance', component: IndexComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '', component: FinanceHome,
        children: [

          { path: 'bill', component: BillComponent },
          { path: 'flow', component: FlowComponent }
        ]
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'acceptTerm', component: ThermComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);