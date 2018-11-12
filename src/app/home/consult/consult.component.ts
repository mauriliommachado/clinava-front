import { Component, OnInit } from '@angular/core';
import { Event } from '../../_models/event';
import { Config } from '../../_models/config';
import { UserService, ConfigService, EventService } from '../../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { identity } from 'rxjs';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css'],
  animations: [
    trigger('popOverState', [
      state('none', style({
        display: 'none',
        opacity: 0
      })),
      state('block', style({
        display: 'block',
        opacity: 1
      })),
      transition('block => none', animate('300ms ease-out')),
      transition('none => block', animate('300ms ease-in'))
    ])
  ]
})
export class ConsultComponent implements OnInit {

  event: Event;
  title: String;
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  show = true;
  config: Config;
  initDay: number;
  endDay: number;
  indexDate: Date;
  date: string;
  time: string;

  get stateList() {
    return this.show ? 'block' : 'none'
  }

  toggle() {
    this.show = !this.show;
  }

  constructor(private formBuilder: FormBuilder, private userService: UserService, private configService: ConfigService
    , private eventService: EventService) {
    this.config = this.configService.getConfig();
   }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.indexDate = new Date();
    if (this.indexDate.getMinutes() > this.config.interval) {
      this.indexDate.setHours(this.indexDate.getHours() + 1);
    } else {
      this.indexDate.setMinutes(this.config.interval);
    }
    if((this.indexDate.getHours() + 1) > this.config.hourEnd){
      this.indexDate.setTime(this.indexDate.getTime() + (60 * 60 * 1000 * ((23 - this.config.hourEnd) + this.config.hourInit)));
      this.indexDate.setMinutes(0);
    }
    this.resetDate();
    this.registerForm = this.formBuilder.group({
      user: ['', Validators.required],
      duration: [this.config.interval, Validators.required],
      date: [this.date, Validators.required],
      obs: [],
      time: [this.time, Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    let event = <Event>this.registerForm.value;
    event.date = this.indexDate;
    event.id = (this.eventService.getAll().length + 1).toString();
    event.user = this.userService.getById(this.registerForm.value.user);
    this.eventService.register(event);
    this.toggle();
    this.registerForm = this.formBuilder.group({
      user: ['', Validators.required],
      duration: [this.config.interval, Validators.required],
      date: [this.date, Validators.required],
      obs: [],
      time: [this.time, Validators.required]
    });
  }

  addMinutes() {
    this.indexDate.setTime(this.indexDate.getTime() + (this.config.interval * 60 * 1000));
    this.resetDate();
  }

  subMinutes() {
    this.indexDate.setTime(this.indexDate.getTime() - (this.config.interval * 60 * 1000));
    this.resetDate();
  }

  resetDate() {
    if ((this.indexDate.getHours()) < this.config.hourInit) {
      this.indexDate.setTime(this.indexDate.getTime() - (60 * 60 * 1000 * ((24 - this.config.hourEnd) + this.config.hourInit)));
      this.indexDate.setMinutes(this.config.interval);
    }
    if ((this.indexDate.getHours() + 1) > this.config.hourEnd) {
      this.indexDate.setTime(this.indexDate.getTime() + (60 * 60 * 1000 * ((24 - this.config.hourEnd) + this.config.hourInit)));
      this.indexDate.setMinutes(0);
    }
    let sHour: string = this.indexDate.getHours().toLocaleString();
    let sMinute: string = this.indexDate.getMinutes().toLocaleString();
    this.time = (sHour.length == 1 ? ("0" + sHour) : sHour) + ":" + (sMinute.length == 1 ? ("0" + sMinute) : sMinute);
    this.date = this.indexDate.toISOString().split('T')[0];
  }

}
