import { Component, OnInit } from '@angular/core';
import { Event } from '../../_models/event'
import { User, Config, Patient } from '../../_models';
import { ConfigService, EventService, UserService } from '../../_services';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {


  monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outrubro", "Novembro", "Dezembro"];
  weekNames = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta",
    "Sabado"];
  config: Config;
  initDay: number;
  endDay: number;
  month: string;
  days: Day[] = [];
  eventDate: Date = new Date();
  weekIndex: number;
  today: Date;
  id: string;
  visible = false;
  showSummary = false;
  showBilling = false;
  attendants;
  docName: string = "Selecione um atendente";
  event: Event= null;

  constructor(private userService: UserService, private configService: ConfigService, private eventService: EventService, private route: ActivatedRoute) {


    this.route.params.subscribe(params => {
      this.id = params["id"];
      this.ngOnInit();
      // your code continues here
    });
    if (!this.id) {
      let users;
      this.userService.getAttendants().subscribe(resp => {
        users = resp;
        this.attendants = users;
        this.id = users.length > 0 ? users[0].id : null;
      });
    }
    route.params.subscribe(val => {

    });
  }

  ngOnInit() {
    this.weekIndex = 0;
    this.configService.getConfig().subscribe(resp => {
      this.config = resp[0];
      this.initDates();
    });
  }

  initDates() {
    if (!this.id) {
      return;
    }
    this.userService.getById(this.id).subscribe(u => this.docName = "Dr. " + u.name);
    this.days = new Array();
    this.today = new Date();
    var weekInMilliseconds = 7 * 24 * 60 * 60 * 1000 * this.weekIndex;
    this.today.setTime(this.today.getTime() + weekInMilliseconds);
    var day = this.today.getDay() || 7; // Get current day number, converting Sun. to 7
    if (day !== 1) {             // Only manipulate the date if it isn't Mon.
      this.today.setHours(-24 * (day - 1));   // Set the hours to day number minus 1
    }
    
    this.month = this.monthNames[this.today.getMonth()];
    let spots = (60 / this.config.interval) * (this.config.hourEnd - this.config.hourInit);
    if (!this.id) {
      return;
    }
    this.initDay = this.today.getDate();
    
    let endDate = new Date(this.today.getTime() + 24 * 60 * 60 * 1000 * this.config.workingDays.length - 1);
    this.endDay = endDate.getDate();
    endDate.setDate(this.endDay);
    endDate.setHours(this.config.hourEnd);
    endDate.setMinutes(this.config.interval)
    this.eventService.getByTime(this.today, endDate, this.id).subscribe(resp => {
      this.days = new Array();
      for (let d = 0; d < this.config.workingDays.length; d++) {
        let day = new Day();
        day.events = new Array();
        let hd = new Date(this.today.getTime());
        hd.setTime(hd.getTime() + 24 * 60 * 60 * 1000 * (this.weekNames.indexOf(this.config.workingDays[d]) -1));
        day.header = hd.getDate() + "/" + (hd.getMonth() + 1) + " - " + this.config.workingDays[d];
        let events = resp;
        for (let index = 0; index <= spots; index++) {
          let event = new Event();
          event.date = new Date(this.today);
          event.date.setFullYear(this.today.getFullYear());
          event.date.setMonth(this.today.getMonth());
          event.date.setDate(this.today.getDate() + d);
          event.date.setHours(this.config.hourInit);
          event.date.setMinutes(0);
          event.date.setSeconds(0);
          event.date.setMilliseconds(0);
          event.date.setTime(event.date.getTime() + this.config.interval * index * 60000);
          let endDate = new Date(event.date.getTime() + this.config.interval * 60000);
          let e = events.filter(e => new Date(e.date).getTime() >= event.date.getTime() && new Date(e.date).getTime() < endDate.getTime());;
          if (e.length != 0) {
            e.forEach(element => {
              event = element;
              day.events.push(event);
            });
            continue;
          }
          day.events.push(event);
        }
        this.days.push(day);
      }
    });

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

  onClose() {
    this.visible = false;
    this.showSummary = false;
    this.showBilling = false;
    this.event = null;
    this.initDates();
  }

  show(event: Event) {
    if (!event.id) {
      this.eventDate = event.date;
      this.visible = true;
    }else{
      this.event = event;
      this.showSummary = true;
    }
  }

  bill(event: Event){
    this.event = event;
    this.showBilling = true;
  }

  getDaysInMonth(m, y) {
    return m === 2 ? y & 3 || !(y % 25) && y & 15 ? 28 : 29 : 30 + (m + (m >> 3) & 1);
  }

}
class Day {
  header: string;
  events: Event[];
}
