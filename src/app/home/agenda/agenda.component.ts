import { Component, OnInit } from '@angular/core';
import { Event } from '../../_models/event'
import { User, Config, Pacient } from '../../_models';
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
  config: Config;
  initDay: number;
  endDay: number;
  month: string;
  days: Day[] = [];
  eventDate:Date = new Date();
  weekIndex: number;
  today: Date;
  id:string;
  visible = false;
  docName:string = "Selecione um atendente";

  constructor(private userService: UserService, private configService: ConfigService, private eventService: EventService, private route: ActivatedRoute) {
    this.config = this.configService.getConfig();
    this.id = this.route.snapshot.params['id'];
    if(!this.id){
      this.id = this.userService.getAttendants().length >   0 ? this.userService.getAttendants()[0].id : null;
    }
    route.params.subscribe(val => {
      this.ngOnInit();
    });
    
  }

  ngOnInit() {
    this.weekIndex = 0;
    this.initDates();
  }

  initDates() {
    if(!this.id){
      return;
    }
    this.docName = this.userService.getById(this.id).name;
    this.days = new Array();
    this.today = new Date();
    var weekInMilliseconds = 7 * 24 * 60 * 60 * 1000 * this.weekIndex;
    this.today.setTime(this.today.getTime() + weekInMilliseconds);
    var day = this.today.getDay() || 7; // Get current day number, converting Sun. to 7
    if (day !== 1) {             // Only manipulate the date if it isn't Mon.
      this.today.setHours(-24 * (day - 1));   // Set the hours to day number minus 1
    }
    this.initDay = this.today.getDate();
    this.endDay = this.today.getDate() + this.config.workingDays.length - 1;
    this.month = this.monthNames[this.today.getMonth()];
    let spots = (60 / this.config.interval) * (this.config.hourEnd - this.config.hourInit);
    if(!this.id){
      return;
    }
    for (let d = 0; d < this.config.workingDays.length; d++) {
      let day = new Day();
      day.events = new Array();
      day.header = this.today.getDate() + d + "/" + (this.today.getMonth() + 1) + " - " + this.config.workingDays[d];
      for (let index = 0; index <= spots; index++) {
        let event = new Event();
        event.date = new Date(this.today);
        event.date.setFullYear(this.today.getFullYear());
        event.date.setMonth(this.today.getMonth());
        event.date.setDate(this.today.getDate()+d);
        event.date.setHours(this.config.hourInit);
        event.date.setMinutes(0);
        event.date.setTime(event.date.getTime() + this.config.interval * index * 60000);
        let e = this.eventService.getByTime(event.date,this.config.interval, this.id);
        if (e != null) {
          event = e;
        }
        day.events.push(event);
      }
      this.days.push(day);
    }
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

  onClose(){
    this.visible = false;
    this.initDates();
  }

  show(date:Date){
    this.eventDate = date;
    this.visible = true;
  }

}
class Day {
  header: string;
  events: Event[];
}
