import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { UserComponent,RepeatPipe } from './user/user.component';
import { AdminComponent } from './admin.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertService, AuthenticationService, UserService } from '../_services';

@NgModule({
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UserComponent, AdminComponent,ConfigurationComponent, RepeatPipe],
  providers: [
    AlertService,
    AuthenticationService,
    UserService,
  ]
})
export class AdminModuleModule { }
