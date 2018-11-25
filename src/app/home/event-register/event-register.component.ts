import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PacientService, ConfigService, UserService, EventService } from '../../_services';
import { Pacient, User, Event } from 'src/app/_models';



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
    console.log(event.target.value);
    this.pacients = this.pacientService.getByName(event.target.value);
  }

  select(pacient: Pacient) {
    this.pacientName = "";
    this.selected = true;
    this.pacient = pacient;
    this.pacientName = pacient.name;
    this.pacientPhone = pacient.phone;
  }

  onSubmit() {
    if (this.selected) {
      let event = new Event();
      event.pacient = this.pacient;
      event.date = this.date;
      event.duration = this.configService.getConfig().interval;
      event.user = this.userService.getById(this.user);
      this.eventService.register(event);
      this.closeAndClean();
    } else if ((typeof this.pacientName != 'undefined' && this.pacientName) && (typeof this.pacientPhone != 'undefined' && this.pacientPhone)) {
      let event = new Event();
      event.pacient = this.newPacient();
      event.date = this.date;
      event.duration = this.configService.getConfig().interval;
      event.user = this.userService.getById(this.user);
      this.eventService.register(event);
      this.closeAndClean();
    }
  }

  newPacient() {
    let pacient = new Pacient();
    pacient.name = this.pacientName;
    pacient.phone = this.pacientPhone;
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
