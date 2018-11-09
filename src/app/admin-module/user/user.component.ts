import { Component, OnInit } from '@angular/core';
import { User } from '../../_models';
import { UserService, AlertService,AuthenticationService } from '../../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentUser: User;
  users: Array<User>;
  title: String;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authService: AuthenticationService,
    private alertService: AlertService) {

  }

  ngOnInit() {
    this.users = new Array();
    this.currentUser = new User();
    this.currentUser.id = "1";
    this.currentUser.name = "Maurílio Miranda Machado";
    this.currentUser.email = "mauriliommachado@gmail.com";
    this.currentUser.username = "mauriliommachado@gmail.com";
    this.currentUser.role = new Array("Administrador");
    let user = new User();
    user.id = "2";
    user.name = "Diogo";
    user.email = "diogo@gmail.com";
    user.username = "diogo@gmail.com";
    user.role = new Array("Usuário");
    this.users.push(this.currentUser);
    this.users.push(user);
    user = new User();
    user.id = "3";
    user.name = "Teste Teste";
    user.email = "teste@gmail.com";
    user.username = "teste@gmail.com";
    user.role = new Array("Usuário");
    this.users.push(user);
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.alertService.success('Registro efetuado com sucesso', true);
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
