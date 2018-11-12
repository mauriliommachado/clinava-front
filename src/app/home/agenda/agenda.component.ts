import { Component, OnInit } from '@angular/core';
import { Event } from '../../_models/event'
import { User, Config } from '../../_models';
import { ConfigService, EventService } from '../../_services';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {


  monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outrubro", "Novembro", "Dezembro"];
  headers: string[] = new Array("Segunda", "Terça", "Quarta", "Quinta", "Sexta");
  config: Config;
  initDay: number;
  endDay: number;
  month: string;
  days: Day[] = [];
  weekIndex: number;
  today: Date;

  constructor(private configService: ConfigService, private eventService: EventService) {
    this.config = this.configService.getConfig();
  }

  ngOnInit() {
    this.weekIndex = 0;
    this.initDates();
  }

  initDates() {
    this.days = new Array();
    this.today = new Date();
    var weekInMilliseconds = 7 * 24 * 60 * 60 * 1000 * this.weekIndex;
    this.today.setTime(this.today.getTime() + weekInMilliseconds);
    var day = this.today.getDay() || 7; // Get current day number, converting Sun. to 7
    if (day !== 1) {             // Only manipulate the date if it isn't Mon.
      this.today.setHours(-24 * (day - 1));   // Set the hours to day number minus 1
    }
    this.initDay = this.today.getDate();
    this.endDay = this.today.getDate() + this.headers.length - 1;
    this.month = this.monthNames[this.today.getMonth()];
    let spots = (60 / this.config.interval) * (this.config.hourEnd - this.config.hourInit);
    for (let d = 0; d < this.headers.length; d++) {
      let day = new Day();
      day.events = new Array();
      day.header = this.today.getDate() + d + "/" + (this.today.getMonth() + 1) + " - " + this.headers[d];
      for (let index = 0; index <= spots; index++) {
        let event = new Event();
        event.date = new Date(this.today);
        event.date.setFullYear(this.today.getFullYear());
        event.date.setMonth(this.today.getMonth());
        event.date.setDate(this.today.getDate()+d);
        event.date.setHours(this.config.hourInit);
        event.date.setMinutes(0);
        event.date.setTime(event.date.getTime() + this.config.interval * index * 60000);
        let e = this.eventService.getByTime(event.date);
        if (e != null) {
          event = e;
        }
        day.events.push(event);
      }
      this.days.push(day);
    }















    /*     for (let d = 0; d < this.headers.length; d++) {
          let day = new Day();
          day.events = new Array();
          day.header = this.today.getDate() + d + "/" + (this.today.getMonth() + 1) + " - " + this.headers[d];
          for (let index = 0; index <= spots; index++) {
            let event = new Event();
            event.date = new Date();
            event.date.setDate(this.today.getDate() + d);
            event.date.setHours(this.config.hourInit);
            event.date.setMinutes(0);
            event.date.setTime(event.date.getTime() + this.config.interval * index * 60000);
            day.events.push(event);
          }
          this.days.push(day);
        } */
  }

  add() {
    this.weekIndex = this.weekIndex + 1;
    this.initDates();
  }

  reset() {
    this.weekIndex = 0;
    this.initDates();
  }

  sub() {
    this.weekIndex = this.weekIndex - 1;
    this.initDates();
  }

}
class Day {
  header: string;
  events: Event[];
}
