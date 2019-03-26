import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillComponent, RepeatPipe, NaturePipe } from './bill/bill.component';
import { FlowComponent } from './flow/flow.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from "ngx-currency";
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule, NgxCurrencyModule,FormsModule
  ],
  declarations: [BillComponent,RepeatPipe, NaturePipe,
  FlowComponent]
})
export class FinanceModule { }
