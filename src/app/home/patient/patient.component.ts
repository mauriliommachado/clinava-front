import { Component, OnInit } from '@angular/core';
import { Patient, Address, Contact } from '../../_models';
import { PatientService } from '../../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
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
export class PatientComponent implements OnInit {

  currentPatient: string;
  title: String;
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  show = false;
  editing = false;
  patients: Array<Patient>;

  constructor(private formBuilder: FormBuilder, private patientService: PatientService) {

  }


  ngOnInit() {
    this.patientService.getAll().subscribe(resp => this.patients = resp);
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
    if(this.editing){
      this.editing = false;
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
      addressId: [''],
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
    let patient = new Patient();
    this.patientService.getById(id).subscribe(resp => {patient = <Patient>resp
      this.registerForm = this.formBuilder.group({
        name: [patient.name, Validators.required],
        cpf: [patient.cpf],
        birthday: [patient.birthday ? patient.birthday.toString().split('T')[0] : ''],
        phone: [patient.phone, Validators.required],
        email: [patient.email],
        addressId: [patient.address ? patient.address.id : ''],
        street: [patient.address ? patient.address.street : ''],
        number: [patient.address ? patient.address.number : ''],
        complement: [patient.address ? patient.address.complement : ''],
        city: [patient.address ? patient.address.city : ''],
        state: [patient.address ? patient.address.state : ''],
        zip: [patient.address ? patient.address.zip : '']
      });
      this.currentPatient = id;
      this.toggle();
      this.editing = true;
    });
  }

  delete(id: string) {
    this.patientService.delete(id).subscribe(resp=> {
      this.patientService.getAll().subscribe(resp => this.patients = resp);
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    let patient = new Patient();
    let form = this.registerForm.value;
    patient.name=form.name;
    patient.email = form.email;
    patient.phone = form.phone
    patient.cpf = form.cpf;
    patient.birthday = form.birthday;
    let address = new Address();
    address.id = form.addressId;
    address.city = form.city;
    address.complement = form.complement;
    address.number = form.number;
    address.state = form.state;
    address.street = form.street;
    address.zip = form.zip;
    patient.address = address;
    if (this.editing) {
      patient.id = this.currentPatient;
      this.patientService.update(patient).subscribe(r=> {
        this.patientService.getAll().subscribe(resp => this.patients = resp);
      });
      this.editing = false;
    } else {
      this.patientService.register(patient).subscribe(r=> {
        this.patientService.getAll().subscribe(resp => this.patients = resp);
      });
    }
    this.toggle();
    this.cleanForm();
  }
}
