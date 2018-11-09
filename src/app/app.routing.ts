import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { HomeComponent } from './home/home.component';
import { AgendaComponent } from './home/agenda/agenda.component';

const appRoutes: Routes = [
    {
        path: 'home', component: IndexComponent, canActivate: [AuthGuard],
        children: [
          {path: '', component: AgendaComponent},
          {path: 'agenda', component: AgendaComponent}
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);