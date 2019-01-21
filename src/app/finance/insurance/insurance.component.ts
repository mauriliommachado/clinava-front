import { Component, OnInit } from '@angular/core';import { Config } from '../../_models';
import { AlertService, ConfigService } from '../../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private alertService: AlertService,
    private configService: ConfigService) { }

  registerForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required]
    });
    this.cleanForm();
  }

  cleanForm() {
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required]
    });
  }

   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }

}
