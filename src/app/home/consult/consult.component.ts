import { Component, OnInit } from '@angular/core';
import { Event } from '../../_models/event';
import { Config } from '../../_models/config';
import { UserService, ConfigService, EventService, PatientService } from '../../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Patient } from 'src/app/_models';

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

  currentEvent: string;
  title: String;
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  show = false;
  editing = false;
  config: Config;
  initDay: number;
  endDay: number;
  indexDate: Date;
  date: string;
  time: string;
  attendants;
  patients;
  events;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private configService: ConfigService
    , private eventService: EventService, private patientService: PatientService) {
    this.config = this.configService.getConfig();
  }


  ngOnInit() {
    this.userService.getAttendants().subscribe(resp => this.attendants = resp);
    this.patientService.getAll().subscribe(resp => this.patients = resp);
    this.getAll();
    this.indexDate = new Date();
    if ((this.indexDate.getHours()) < this.config.hourInit) {
      this.indexDate.setTime(this.indexDate.getTime() + (60 * 60 * 1000 * (this.config.hourInit - this.indexDate.getHours())));
      this.indexDate.setMinutes(0);
    } else if ((this.indexDate.getHours() + 1) > this.config.hourEnd) {
      this.indexDate.setTime(this.indexDate.getTime() + (60 * 60 * 1000 * (24 - this.indexDate.getHours())));
      this.indexDate.setTime(this.indexDate.getTime() + (60 * 60 * 1000 * (this.config.hourInit - this.indexDate.getHours())));
      this.indexDate.setMinutes(0);
    } else if (this.indexDate.getMinutes() > this.config.interval) {
      this.indexDate.setTime(60 * 60 * 1000 + this.indexDate.getTime());
      this.indexDate.setMinutes(0);
    } else {
      this.indexDate.setMinutes(30);
    }
    this.resetDate();
    this.cleanForm();
    this.title = this.show ? 'Cancelar' : 'Cadastrar';
  }

  getAll(): any {
    let dateNow = new Date();
    dateNow.setHours(0);
    dateNow.setMinutes(0);
    this.eventService.getAll(dateNow).subscribe(resp => this.events = resp);
  }


  get stateList() {
    return this.show ? 'block' : 'none'
  }

  toggle() {
    this.submitted = false;
    this.show = !this.show;
    if (this.editing && !this.show) {
      this.cleanForm()
    }
    this.title = this.show ? 'Cancelar' : 'Cadastrar';
    this.userService.getAttendants().subscribe(resp => this.attendants = resp);
  }

  cleanForm() {
    this.registerForm = this.formBuilder.group({
      user: ['', Validators.required],
      patient: ['', Validators.required],
      duration: [this.config.interval, Validators.required],
      date: [this.date, Validators.required],
      obs: [],
      time: [this.time, Validators.required]
    });
  }

  edit(id: string) {
    this.eventService.getById(id).subscribe(resp => {
      let event = <Event>resp;
      console.log(event);
      let sHour: string = new Date(event.date).getHours().toLocaleString();
      let sMinute: string = new Date(event.date).getMinutes().toLocaleString();
      let time = (sHour.length == 1 ? ("0" + sHour) : sHour) + ":" + (sMinute.length == 1 ? ("0" + sMinute) : sMinute);
      this.registerForm = this.formBuilder.group({
        user: [event.user.id, Validators.required],
        patient: [event.patient.id, Validators.required],
        duration: [event.duration, Validators.required],
        date: [event.date.toString().split('T')[0], Validators.required],
        obs: [event.obs],
        time: [time, Validators.required]
      });
      this.editing = true;
      this.currentEvent = id;
      this.toggle();
    });
  }

  delete(id: string) {
    this.eventService.delete(id).subscribe(resp => {
      this.getAll();
    });;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    let event = <Event>this.registerForm.value;
    event.date = new Date(this.registerForm.value.date);
    event.date.setHours(this.registerForm.value.time.split(':')[0]);
    event.date.setMinutes(this.registerForm.value.time.split(':')[1]);
    this.userService.getById(this.registerForm.value.user).subscribe(user => {
      event.user = user;
      this.patientService.getById(this.registerForm.value.patient).subscribe(resp => {
        event.patient = <Patient>resp;
        if (this.editing) {
          event.id = this.currentEvent;
          this.eventService.update(event).subscribe(resp => {
            this.getAll();
          });
          this.editing = false;
        } else {
          this.eventService.register(event).subscribe(resp => {
            this.getAll();
          });
        }
        this.toggle();
        this.cleanForm();
        this.indexDate = new Date();
      });
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

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
