import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportFlowComponent,MapValuesPipe } from './report-flow/report-flow.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ReportFlowComponent,MapValuesPipe]
})
export class ReportModule { }
