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
import { AlertService, AuthenticationService, UserService, ConfigService, EventService, PacientService,RoleService } from './_services';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { IndexComponent } from './index/index.component';

import { HomeRoutingModule } from './home/home-routing.module'; //<-- import
import { HomeModule }     from './home/home.module'; //<-- import
import { AdminModuleModule }     from './admin-module/admin-module.module'; //<-- import
import {NgxMaskModule} from 'ngx-mask'

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        HomeModule,AdminModuleModule,
        HomeRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        NgxMaskModule.forRoot()
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        LoginComponent,
        RegisterComponent,IndexComponent ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        EventService,
        ConfigService,PacientService,RoleService, 
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }