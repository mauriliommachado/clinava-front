import { Component, OnInit } from '@angular/core';
import { User, Contact, Role } from '../../_models';
import { AlertService, UserService, RoleService } from '../../_services';
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
      state('block', style({
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
  users;
  roles;

  constructor(private formBuilder: FormBuilder,
    private alertService: AlertService,
    private userService: UserService,
    private rolesService: RoleService) {
  }

  get stateList() {
    return this.show ? 'block' : 'none'
  }

  cleanForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
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
    if(this.editing){
      this.editing = false;
    }
    this.title = this.show ? 'Cancelar' : 'Cadastrar'
  }


  ngOnInit() {
    this.userService.getAll().subscribe((res: any[]) => {
      this.users = res;
    });
    this.rolesService.getAll().subscribe((res: any[]) => {
      this.roles = res;
    });
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
      password: ['']
    });
    this.title = this.show ? 'Cancelar' : 'Cadastrar';
  }


  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    let user = new User();
    let u = <User>this.registerForm.value;
    user.id = u.id;
    user.address = null;
    user.contacts = new Array<Contact>();
    user.email = u.email;
    user.name = u.name;
    user.password = u.password;
    user.roles = new Array<Role>();
    let role = new Role();
    role.id = this.registerForm.value.role;
    user.roles.push(role);
    user.username = user.email;
    if (this.editing) {
      user.id = this.currentUser.id;
      this.userService.update(user).subscribe(resp => {
        this.userService.getAll().subscribe((res: any[]) => {
          this.users = res;
          this.toggle();
          this.cleanForm();
          this.alertService.success("Salvo com sucesso.", 5000);
        });
      });
      this.editing = false;
    } else {
      this.userService.register(user).subscribe(resp => {
        this.userService.getAll().subscribe((res: any[]) => {
          this.users = res;
          this.toggle();
          this.cleanForm();
          this.alertService.success("Salvo com sucesso.", 5000);
        });
      });;
    }

  }

  edit(id: string) {
    let user;
    this.userService.getById(id).subscribe((res: User) => {
      user = res;
      this.registerForm = this.formBuilder.group({
        name: [user.name, Validators.required],
        email: [user.email, Validators.required],
        role: [user.roles[0].id, Validators.required],
        password: [user.password]
      });
      this.currentUser = user;
      this.toggle();
      this.editing = true;
    });

  }

  delete(id: string) {
    this.userService.delete(id).subscribe(resp => {
      this.userService.getAll().subscribe((res: any[]) => {
        this.users = res;
      });
    });
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'role' })
export class RepeatPipe implements PipeTransform {
  transform(value: any) {
    if (value[0].name == "ROLE_ADMIN") {
      return "Atendente";
    }
    return "Usuário";
  }
}