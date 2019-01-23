import { Component, OnInit } from '@angular/core';import { Config } from '../../_models';
import { AlertService, ConfigService } from '../../_services';
import { User } from '../../_models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.css']
})
export class ProceduresComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private alertService: AlertService,
    private configService: ConfigService) { }

  registerForm: FormGroup;
  submitted = false;
  users: User[];

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      code: ["", Validators.required],
      value:  ["", Validators.required]
    });
    this.cleanForm();
  }

  cleanForm() {
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      code: ["", Validators.required],
      value:  ["", Validators.required]
    });
  }

   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }

   onSubmit(){
     
   }

}
