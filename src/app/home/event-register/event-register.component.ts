import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PatientService, ConfigService, UserService, EventService } from '../../_services';
import { Patient, User, Event, Contact } from 'src/app/_models';



@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.css']
})
export class EventRegisterComponent implements OnInit {
  @Output() close: EventEmitter<String> = new EventEmitter();
  @Input() date: Date;
  @Input() user: string;
  @Input() visible = false;

  patients: Patient[] = [];
  patient: Patient = new Patient();
  selected = false;
  patientName: string = "";
  patientPhone: string = "";

  constructor(private patientService: PatientService,
    private configService: ConfigService,
    private eventService: EventService,
    private userService: UserService) {
  }


  ngOnInit() {
  }

  hide(event) {
    let elementId: string = (event.target as Element).id;
    if (elementId == "customModal" || elementId == "close") {
      this.visible = false;
      this.closeModal();
    }

  }

  closeModal(): void {
    this.close.emit();

  }

  onKey(event: any) {
    this.selected = false;
    this.patient = new Patient();
    if(this.patientName){
      this.patientService.getByName(event.target.value).subscribe(resp => this.patients = resp);
    }else{
      this.patients = new Array();
      this.patient = new Patient();
    }
    
  }

  select(patient: Patient) {
    this.patientName = "";
    this.selected = true;
    this.patient = patient;
    this.patientName = patient.name;
    this.patientPhone = patient.phone;
  }

  onSubmit() {
    if (this.selected) {
      let event = new Event();
      event.patient = this.patient;
      event.date = this.date;
      event.duration = this.configService.getConfig().interval;
      this.userService.getById(this.user).subscribe(user => {
        event.user = user;
        this.eventService.register(event).subscribe(resp => this.closeAndClean());
      });
    } else if ((typeof this.patientName != 'undefined' && this.patientName) && (typeof this.patientPhone != 'undefined' && this.patientPhone)) {
      let event = new Event();
      event.patient = this.newPatient();
      event.date = this.date;
      event.duration = this.configService.getConfig().interval;
      this.userService.getById(this.user).subscribe(user => {
        event.user = user;
        this.eventService.register(event).subscribe(resp => this.closeAndClean());
      });
    }
  }

  newPatient() {
    let patient = new Patient();
    patient.name = this.patientName;
    patient.phone = this.patientPhone;
    this.patientService.register(patient).subscribe(resp =>resp);
    return patient;
  }

  closeAndClean() {
    this.patient = new Patient();
    this.patients = new Array();
    this.selected = false;
    this.patientName = "";
    this.patientPhone = "";
    this.closeModal();
  }
}
