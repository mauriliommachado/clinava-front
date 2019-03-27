import { Component, OnInit } from '@angular/core';
import { EventService } from '../../_services';
import { Bill, BillConstants, Event } from 'src/app/_models';


@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit {

  constructor(private eventService: EventService) { }

  events: Event[] = new Array();
  date = new Date();
  initDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1).toISOString().substring(0, 10);
  endDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).toISOString().substring(0, 10);

  ngOnInit() {
  }

  onSubmit() {
    this.validateFields();
    this.eventService.getByTime(new Date(this.initDate),
      new Date(this.endDate))
      .subscribe(resp => {
        this.events = new Array();
        resp.filter(e => e.bills.some(b => b.status == new BillConstants().STATUS_CLOSED)).forEach(e => {
          if (this.events.length == 0) {
            this.events.push(e);
          } else {
            var find = this.events.findIndex(x => x.user.id == e.user.id);
            if (find != -1) {
              this.events[find].bills = this.events[find].bills.concat(e.bills);
            } else {
              this.events.push(e);
            }
          }
        });
      });
  }

  getSum(bills: Bill[]): number {
    let sum = 0;
    for (let i = 0; i < bills.length; i++) {
      sum += bills[i].value;
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
  }

}
