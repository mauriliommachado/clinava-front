import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

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
