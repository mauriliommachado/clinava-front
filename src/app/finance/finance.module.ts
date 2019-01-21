import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceComponent } from './insurance/insurance.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  declarations: [InsuranceComponent, PaymentMethodComponent]
})
export class FinanceModule { }
