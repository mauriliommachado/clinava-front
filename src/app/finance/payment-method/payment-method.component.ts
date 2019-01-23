import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/_models';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {

  constructor() { }

  teste = "Desconto de 0%";
  registerForm: FormGroup;
  submitted = false;
  users: User[];
  get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.teste = "Desconto de 0%";
  }

  yourMethod(value) {
    if (value > 0)
      this.teste = "Acrescimo de " + value + "%";
    else
      this.teste = "Desconto de " + value + "%";
  }

  onSubmit(){
     
  }

}
