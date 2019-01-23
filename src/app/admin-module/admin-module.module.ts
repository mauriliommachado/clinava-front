import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { UserComponent, RepeatPipe } from './user/user.component';
import { AdminComponent } from './admin.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { ProceduresComponent } from './procedures/procedures.component';
import { PlanComponent } from './plan/plan.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertService, AuthenticationService, UserService } from '../_services';
import {NgxMaskModule} from 'ngx-mask';
import { NgxCurrencyModule } from "ngx-currency";

@NgModule({
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    NgxMaskModule.forChild(),
    ReactiveFormsModule,
    NgxCurrencyModule
  ],
  declarations: [UserComponent, AdminComponent, ConfigurationComponent, RepeatPipe, InsuranceComponent, PlanComponent, ProceduresComponent, PaymentMethodComponent],
  providers: [
    AlertService,
    AuthenticationService,
    UserService,
  ]
})
export class AdminModuleModule { }
