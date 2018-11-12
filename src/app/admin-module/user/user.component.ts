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

  get stateList() {
    return this.show ? 'block' : 'none'
  }


  toggle() {
    this.show = !this.show;
    this.title = this.show ? 'Cancelar' : 'Cadastrar'
  }

  constructor(private formBuilder: FormBuilder,
    private alertService: AlertService,
    private userService: UserService) {

  }

  ngOnInit() {
    this.currentUser = new User();
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.title = this.show ? 'Cancelar' : 'Cadastrar'
  }


  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.alertService.success('Registro efetuado com sucesso', true);
    
    if (this.registerForm.invalid) {
      return;
    }
    let user = <User>this.registerForm.value;
    user.id = (this.userService.getAll().length+1).toString();
    this.userService.register(user);
    this.toggle();
    /* this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    
    this.authService.signin(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registro efetuado com sucesso', true);
          this.router.navigate(['/admin/user']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }); */
  }

}
