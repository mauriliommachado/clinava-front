import { Component, OnInit } from '@angular/core';
import { EventService } from '../../_services';
import { Event } from '../../_models';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  events: Event[];

  constructor(private eventService: EventService, private route: Router) { }

  ngOnInit() {
    let date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    this.eventService.getByCheckedId(date).subscribe(resp => {
      let array: Event[] = resp;
      this.events = array.sort((val1, val2) => { return new Date(val1.checkIn).getTime() - new Date(val2.checkIn).getTime() });
    });
  }

  openEvent(id:string) {
    this.route.navigate(['/record/record/'+ id]);
  }

}

