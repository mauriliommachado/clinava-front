import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PatientService, ConfigService, UserService, EventService, AlertService } from '../../_services';
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
    private userService: UserService,
    private alertService: AlertService) {
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
    if (this.patientName) {
      this.patientService.getByName(event.target.value).subscribe(resp => this.patients = resp);
    } else {
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
      this.configService.getConfig().subscribe(resp => {
        let config = resp[0];
        let event = new Event();
        event.patient = this.patient;
        event.date = this.date;
        event.duration = config.interval;
        this.userService.getById(this.user).subscribe(user => {
          event.user = user;
          this.eventService.register(event).subscribe(resp => {
            this.closeAndClean(); 
            this.alertService.success("Salvo com sucesso.", 5000);
          });
        });
      })

    } else if ((typeof this.patientName != 'undefined' && this.patientName) && (typeof this.patientPhone != 'undefined' && this.patientPhone)) {
      this.configService.getConfig().subscribe(resp => {
        let config = resp[0];
        let event = new Event();
        let patient = new Patient();
        patient.name = this.patientName;
        patient.phone = this.patientPhone;
        this.patientService.register(patient).subscribe(resp => {
          event.patient = <Patient>resp.body;
          event.date = this.date;
          event.duration = config.interval;
          this.userService.getById(this.user).subscribe(user => {
            event.user = user;
            this.eventService.register(event).subscribe(resp => {
              this.closeAndClean(); 
              this.alertService.success("Salvo com sucesso.", 5000);
            });
          });
        });
      });
    }
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
