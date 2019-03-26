import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import {
    AlertService,
    AuthenticationService,
    UserService,
    ConfigService,
    EventService,
    PatientService,
    RoleService,
    RecordService,
    OperatorService,
    PlanService,
    ProcedureService,
    PaymentMethodService,
    BillService
} from './_services';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { IndexComponent } from './index/index.component';

import { HomeRoutingModule } from './home/home-routing.module';
import { HomeModule } from './home/home.module';
import { ClinicModule } from './clinic/clinic.module';
import { ClinicHome } from './clinic/clinic.component';
import { FinanceModule } from './finance/finance.module';
import { FinanceHome } from './finance/finance.component';
import { AdminModuleModule } from './admin-module/admin-module.module';
import { NgxMaskModule } from 'ngx-mask';
import { ThermComponent } from './therm/therm.component'

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        ClinicModule,
        FinanceModule,
        HomeModule, AdminModuleModule,
        HomeRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        NgxMaskModule.forRoot()
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        LoginComponent,
        ClinicHome,
        FinanceHome,
        RegisterComponent, IndexComponent, ThermComponent], 
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        EventService,
        RecordService,
        ConfigService, PatientService, RoleService,
        OperatorService,
        PlanService,
        ProcedureService,
        PaymentMethodService,
        BillService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }