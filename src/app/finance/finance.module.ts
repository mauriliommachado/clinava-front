import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillComponent } from './bill/bill.component';
import { FlowComponent } from './flow/flow.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from "ngx-currency";

@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule, NgxCurrencyModule
  ],
  declarations: [BillComponent,
  FlowComponent]
})
export class FinanceModule { }
