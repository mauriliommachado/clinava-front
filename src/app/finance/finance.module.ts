import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillComponent, RepeatPipe, NaturePipe } from './bill/bill.component';
import { FlowComponent } from './flow/flow.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from "ngx-currency";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RevenueComponent } from './revenue/revenue.component';


@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule, NgxCurrencyModule,FormsModule,RouterModule
  ],
  declarations: [BillComponent,RepeatPipe, NaturePipe,
  FlowComponent, RevenueComponent],
  exports: [RepeatPipe, NaturePipe]
})
export class FinanceModule { }
