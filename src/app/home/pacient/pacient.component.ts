import { Component, OnInit } from '@angular/core';
import { Pacient, Address, Contact } from '../../_models';
import { PacientService } from '../../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-pacient',
  templateUrl: './pacient.component.html',
  styleUrls: ['./pacient.component.css'],
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
export class PacientComponent implements OnInit {

  currentPacient: string;
  title: String;
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  show = false;
  editing = false;
  pacients: Array<Pacient>;

  constructor(private formBuilder: FormBuilder, private pacientService: PacientService) {

  }


  ngOnInit() {
    this.pacientService.getAll().subscribe(resp => this.pacients = resp);
    this.cleanForm();
    this.title = this.show ? 'Cancelar' : 'Cadastrar'
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
    this.title = this.show ? 'Cancelar' : 'Cadastrar'
  }

  cleanForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      cpf: [''],
      birthday: [''],
      phone: ['',Validators.required],
      email: [''],
      street: [],
      number: [],
      complement: [],
      city: [],
      state: ['1'],
      zip: []
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  edit(id: string) {
    let pacient = new Pacient();
    this.pacientService.getById(id).subscribe(resp => pacient = <Pacient>resp);
    this.registerForm = this.formBuilder.group({
      name: [pacient.name, Validators.required],
      cpf: [pacient.cpf],
      birthday: [pacient.birthday ? pacient.birthday.toISOString().split('T')[0] : ''],
      phone: [pacient.contact[0].contact, Validators.required],
      email: [pacient.email],
      street: [pacient.address ? pacient.address.street : ''],
      number: [pacient.address ? pacient.address.number : ''],
      complement: [pacient.address ? pacient.address.complement : ''],
      city: [pacient.address ? pacient.address.city : ''],
      state: [pacient.address ? pacient.address.state : ''],
      zip: [pacient.address ? pacient.address.zip : '']
    });
    this.editing = true;
    this.currentPacient = id;
    this.toggle();
  }

  delete(id: string) {
    this.pacientService.delete(id);
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    let pacient = new Pacient();
    let form = this.registerForm.value;
    pacient.name=form.name;
    pacient.email = form.email;
    let phone = new Contact();
    phone.contact = form.phone;
    pacient.contact = new Array();
    pacient.contact.push(phone);
    pacient.cpf = form.cpf;
    pacient.birthday = form.birthday;
    let address = new Address();
    address.city = form.city;
    address.complement = form.complement;
    address.number = form.number;
    address.state = form.state;
    address.street = form.street;
    address.zip = form.zip;
    pacient.address = address;
    if (this.editing) {
      pacient.id = this.currentPacient;
      this.pacientService.update(pacient);
      this.editing = false;
    } else {
      this.pacientService.register(pacient);
    }
    this.toggle();
    this.cleanForm();
  }

}
