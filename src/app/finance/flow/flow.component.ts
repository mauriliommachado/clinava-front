import { Component, OnInit } from '@angular/core';
import { BillService } from '../../_services';
import { Bill, BillConstants } from 'src/app/_models';


@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css']
})
export class FlowComponent implements OnInit {

  constructor(private billService: BillService) { }


  bills: Bill[] = new Array();
  events: Event[] = new Array();
  date = new Date();
  initDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1).toISOString().substring(0, 10);
  endDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).toISOString().substring(0, 10);
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

  getSum(bills: Bill[]): number {
    let sum = 0;
    for(let i = 0; i < this.bills.length; i++) {
      if(this.bills[i].nature == new BillConstants().NATURE_INCOME){
        sum += this.bills[i].value;
      }else{
        sum -= this.bills[i].value;
      }
    }
    return sum;
  }

  print() {
    window.print();
  }

  validateFields() {
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
