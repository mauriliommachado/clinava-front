import { Component, OnInit } from '@angular/core';
import { BillService } from '../../_services';
import { Bill } from 'src/app/_models';
import jsPDF from 'jspdf';
import { autoTable } from 'jspdf-autotable';
declare var require: any;


@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css']
})
export class FlowComponent implements OnInit {

  constructor(
    private billService: BillService) { }


  bills: Bill[];
  initDate = new Date().toISOString().substring(0, 10);
  endDate = new Date().toISOString().substring(0, 10);
  paid: boolean;
  toPay: boolean;
  received: boolean;
  toReceive: boolean;

  ngOnInit() {
  }

  onSubmit() {
    this.validateFields();
    this.billService.getBetween(this.initDate,
      this.endDate,
      this.paid,
      this.toPay,
      this.received,
      this.toReceive).subscribe(resp => {
        this.bills = resp
      });
  }

  report() {
    this.validateFields();
    let jsPDF = require('jspdf');
    require('jspdf-autotable');
    var doc = new jsPDF({
      orientation: 'landscape'});
    doc.text('Fluxo de Caixa', 14, 22);

    this.billService.getBetween(this.initDate,
      this.endDate,
      this.paid,
      this.toPay,
      this.received,
      this.toReceive).subscribe(resp => {
        var rows = [];
        rows = resp;
        rows.forEach(b => {
          b.validUntil = new Date(b.validUntil).toLocaleDateString();
          b.paymentMethod = b.paymentMethod.description;
          b.status = b.status == 1? "ABERTO": "FECHADO";
          b.nature = b.nature == 1? "RECEITA": "DESPESA";
          b.category = b.category == 1? "FIXO": "VARIAVEL";
        })
        doc.autoTable({
          head: [{
            id: '#',
            document: 'Nº',
            description: 'Descrição',
            category: 'Cat.',
            validUntil: 'Validade',
            value: 'Valor',
            paymentMethod: 'Forma Pgto.',
            nature: 'Natureza',
            status: 'Status'
          }],
          body: rows,
          startY: 30,
        });
        doc.save('table.pdf');
      });
    
  }

  validateFields(){
    if (!this.initDate) {
      this.initDate = new Date().toISOString().substring(0, 10);
    }
    if (!this.endDate) {
      this.endDate = new Date().toISOString().substring(0, 10);
    }
    if (!this.paid) {
      this.paid = false;
    }
    if (!this.toPay) {
      this.toPay = false;
    }
    if (!this.received) {
      this.received = false;
    }
    if (!this.toReceive) {
      this.toReceive = false;
    }
  }

}
