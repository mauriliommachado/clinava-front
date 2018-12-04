import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PacientService, ConfigService, UserService, EventService } from '../../_services';
import { Pacient, User, Event, Contact } from 'src/app/_models';



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

  pacients: Pacient[] = [];
  pacient: Pacient = new Pacient();
  selected = false;
  pacientName: string = "";
  pacientPhone: string = "";

  constructor(private pacientService: PacientService,
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
    this.pacient = new Pacient();
    this.pacientService.getByName(event.target.value).subscribe(resp => this.pacients = resp);
  }

  select(pacient: Pacient) {
    this.pacientName = "";
    this.selected = true;
    this.pacient = pacient;
    this.pacientName = pacient.name;
    this.pacientPhone = pacient.birthday.toLocaleDateString();
  }

  onSubmit() {
    if (this.selected) {
      let event = new Event();
      event.pacient = this.pacient;
      event.date = this.date;
      event.duration = this.configService.getConfig().interval;
      
    } else if ((typeof this.pacientName != 'undefined' && this.pacientName) && (typeof this.pacientPhone != 'undefined' && this.pacientPhone)) {
      let event = new Event();
      event.pacient = this.newPacient();
      event.date = this.date;
      event.duration = this.configService.getConfig().interval;
      this.userService.getById(this.user).subscribe(user => {
        event.user = user;
        this.eventService.register(event);
        this.closeAndClean();
      });
    }
  }

  newPacient() {
    let pacient = new Pacient();
    pacient.name = this.pacientName;
    let phone = new Contact();
    phone.contact = this.pacientPhone;
    pacient.contact = new Array();
    pacient.contact.push(phone);
    this.pacientService.register(pacient);
    return pacient;
  }

  closeAndClean() {
    this.closeModal();
    this.pacient = new Pacient();
    this.selected = false;
    this.pacientName = "";
    this.pacientPhone = "";
  }
}
