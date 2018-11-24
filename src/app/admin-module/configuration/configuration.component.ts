import { Component, OnInit } from '@angular/core';
import { Config } from '../../_models';
import { AlertService, ConfigService } from '../../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-Configuration',
  templateUrl: './Configuration.component.html',
  styleUrls: ['./Configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  title: String;
  registerForm: FormGroup;
  loading = false;
  submitted = false;



  cleanForm() {
    console.log(this.configService.config)
    this.registerForm = this.formBuilder.group({
      hourInit: [this.configService.getConfig().hourInit, Validators.required],
      hourEnd: [this.configService.getConfig().hourEnd, Validators.required],
      interval: [this.configService.getConfig().interval, Validators.required],
      workingDays: [this.configService.getConfig().workingDays, Validators.required]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  constructor(private formBuilder: FormBuilder,
    private alertService: AlertService,
    private configService: ConfigService) {

  }

  ngOnInit() {
    this.cleanForm();
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    let configuration = <Config>this.registerForm.value;
    console.log(configuration)
    this.configService.register(configuration);
    this.cleanForm();
    this.submitted = false;
  }


}
