import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {

  constructor() { }

  teste = "Desconto de 0%";

  ngOnInit() {
    this.teste = "Desconto de 0%";
  }

  yourMethod(value) {
    if (value > 0)
      this.teste = "Acrescimo de " + value + "%";
    else
      this.teste = "Desconto de " + value + "%";
  }

}
