import { Component, OnInit } from '@angular/core';
import { User } from '../../_models';
import { AlertService, UserService } from '../../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations: [
    trigger('popOverState', [
      state('none', style({
        display: 'none',
        opacity: 0
      })),
      state('block',   style({
        display: 'block',
        opacity: 1
      })),
      transition('block => none', animate('300ms ease-out')),
      transition('none => block', animate('300ms ease-in'))
    ])
  ]
})
export class UserComponent implements OnInit {
  currentUser: User;
  title: String;
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  show = false;
  editing = false;

  get stateList() {
    return this.show ? 'block' : 'none'
  }

  cleanForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
      password: ['']
    });
  }


  toggle() {
    this.submitted = false;
    this.show = !this.show;
    if (this.editing && !this.show) {
      this.cleanForm()
    }
    this.title = this.show ? 'Cancelar' : 'Cadastrar'
  }

  constructor(private formBuilder: FormBuilder,
    private alertService: AlertService,
    private userService: UserService) {

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
      password: ['']
    });
    this.title = this.show ? 'Cancelar' : 'Cadastrar'
  }


  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    
    if (this.registerForm.invalid) {
      return;
    }
    let user = <User>this.registerForm.value;
    if (this.editing) {
      user.id = this.currentUser.id;
      this.userService.update(user);
      this.editing = false;
    } else {
      user.id = (this.userService.getAll().length+1).toString();
    this.userService.register(user);
    }
    this.toggle();
    this.cleanForm();    
  }

  edit(id: string) {
    let user = this.userService.getById(id);
    this.registerForm = this.formBuilder.group({
      name: [user.name, Validators.required],
      username: [user.username, Validators.required],
      email: [user.email, Validators.required],
      role: [user.role, Validators.required],
      password: [user.password]
    });
    this.editing = true;
    this.currentUser = user;
    this.toggle();
  }

  delete(id: string) {
    this.userService.delete(id);
  }

}

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'role'})
export class RepeatPipe implements PipeTransform {
  transform(value: any) {
    if(value == "user"){
        return "Usuário";
    }
    return "Atendente";
  }
}