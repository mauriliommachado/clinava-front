import { Component, OnInit } from '@angular/core';
import { UserService, PacientService } from '../../_services';
import { Pacient } from 'src/app/_models';



@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.css']
})
export class EventRegisterComponent implements OnInit {

  pacients: Pacient[] = [];
  pacient: Pacient = new Pacient();
  selected = false;
  pacientName: String= "";
  pacientPhone: String= "";

  constructor(private userService: UserService, private pacientService: PacientService) {
  }

  ngOnInit() {
  }

  onKey(event: any) {
    this.selected = false;
    this.pacient = new Pacient();
    console.log(event.target.value);
    this.pacients = this.pacientService.getByName(event.target.value);
  }

  select(pacient: Pacient){
    this.pacientName = "";
    this.selected = true;
    this.pacient = pacient;
    this.pacientName = pacient.name;
    this.pacientPhone = pacient.phone;
  }
}
