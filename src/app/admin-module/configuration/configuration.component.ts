import { Component, OnInit } from '@angular/core';
import { Config } from '../../_models';
import { AlertService, ConfigService } from '../../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-Configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  title: String;
  registerForm: FormGroup;
  loading = false;
  submitted = false;



  cleanForm() {
    let config;
    this.configService.getConfig().subscribe(resp => {
      if (resp && resp.length > 0) {
        config = resp[0];
        this.registerForm = this.formBuilder.group({
          id: [config.id, Validators.required],
          smsLimit: [config.smsLimit, Validators.required],
          hourInit: [config.hourInit, Validators.required],
          hourEnd: [config.hourEnd, Validators.required],
          interval: [config.interval, Validators.required],
          workingDays: [config.workingDays, Validators.required]
        });
      } else {
        config = resp[0];
        this.registerForm = this.formBuilder.group({
          id: [""],
          smsLimit: ["", Validators.required],
          hourInit: ["", Validators.required],
          hourEnd: ["", Validators.required],
          interval: ["", Validators.required],
          workingDays: ["", Validators.required]
        });
      }

    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  constructor(private formBuilder: FormBuilder,
    private alertService: AlertService,
    private configService: ConfigService) {

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: [""],
      smsLimit: ["", Validators.required],
      hourInit: ["", Validators.required],
      hourEnd: ["", Validators.required],
      interval: ["", Validators.required],
      workingDays: ["", Validators.required]
    });
    this.cleanForm();
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    let configuration = <Config>this.registerForm.value;
    this.configService.update(configuration).subscribe(resp => {
      this.cleanForm();
      this.alertService.success("Configurações salvas com sucesso.", 5000);
      this.submitted = false;
    });
  }


}
