import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { HomeComponent } from './home/home.component';
import { ConsultComponent } from './home/consult/consult.component'
import { AgendaComponent } from './home/agenda/agenda.component';
import { PatientComponent } from './home/patient/patient.component';
import { UserComponent } from './admin-module/user/user.component';
import { ConfigurationComponent } from './admin-module/configuration/configuration.component';
import { AdminComponent } from './admin-module/admin.component';
import { EventComponent } from './clinic/event/event.component';
import { ListComponent } from './clinic/list/list.component';
import { ClinicHome } from './clinic/clinic.component';
import { FinanceHome } from './finance/finance.component';
import { InsuranceComponent } from './finance/insurance/insurance.component';
import { PaymentMethodComponent } from './finance/payment-method/payment-method.component';

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
          { path: 'patient', component: PatientComponent }
        ]
      }
    ]
  }, {
    path: 'admin', component: IndexComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '', component: AdminComponent,
        children: [
          { path: 'user', component: UserComponent },
          { path: 'configuration', component: ConfigurationComponent }
        ]
      }
    ]
  },
  {
    path: 'event', component: IndexComponent, canActivate: [AuthGuard],
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
          { path: 'insurance', component: InsuranceComponent },
          { path: 'payment_methods', component: PaymentMethodComponent }
        ]
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);