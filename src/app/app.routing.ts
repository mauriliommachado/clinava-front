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

const appRoutes: Routes = [
    {
        path: 'home', component: IndexComponent, canActivate: [AuthGuard],
        children: [
          {path: '', component: HomeComponent,
          children: [
            {path: '', component: AgendaComponent},
            {path: 'agenda', component: AgendaComponent},
            {path: 'agenda/:id', component: AgendaComponent},
            {path: 'consult', component: ConsultComponent},
            {path: 'patient', component: PatientComponent}
          ]}
        ]
    },{
        path: 'admin', component: IndexComponent, canActivate: [AuthGuard],
        children: [
          {path: '', component: AdminComponent,
          children: [
            {path: 'user', component: UserComponent},
            {path: 'configuration', component: ConfigurationComponent}
          ]}
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);