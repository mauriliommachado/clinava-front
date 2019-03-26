import { Component, OnInit } from '@angular/core';
import { BillService } from '../../_services';
import { Bill } from 'src/app/_models';
import jsPDF from 'jspdf';
import { autoTable } from 'jspdf-autotable';
declare var require: any;


@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css']
})
export class FlowComponent implements OnInit {

  constructor(
    private billService: BillService) { }


  bills: Bill[];
  initDate = new Date().toISOString().substring(0, 10);
  endDate = new Date().toISOString().substring(0, 10);
  paid: boolean;
  toPay: boolean;
  received: boolean;
  toReceive: boolean;

  ngOnInit() {
  }

  onSubmit() {
    this.validateFields();
    this.billService.getBetween(this.initDate,
      this.endDate,
      this.paid,
      this.toPay,
      this.received,
      this.toReceive).subscribe(resp => {
        this.bills = resp
      });
  }

  getSum() : number {
    let sum = 0;
    for(let i = 0; i < this.bills.length; i++) {
      sum += this.bills[i].value;
    }
    return sum;
  }

  print() {
    window.print();
  }

  validateFields(){
    if (!this.initDate) {
      this.initDate = new Date().toISOString().substring(0, 10);
    }
    if (!this.endDate) {
      this.endDate = new Date().toISOString().substring(0, 10);
    }
    if (!this.paid) {
      this.paid = false;
    }
    if (!this.toPay) {
      this.toPay = false;
    }
    if (!this.received) {
      this.received = false;
    }
    if (!this.toReceive) {
      this.toReceive = false;
    }
  }

}
