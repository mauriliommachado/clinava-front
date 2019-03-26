import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-report-flow',
  templateUrl: './report-flow.component.html',
  styleUrls: ['./report-flow.component.css']
})
export class ReportFlowComponent implements OnInit {

  constructor() { }

  title: String = "Título";
  fields: Map<String, String>;
  values: Array<Map<String, any>>;

  ngOnInit() {
    this.values = new Array();
    this.fields = new Map();
    this.fields.set("id","Id");
    this.fields.set("name","Nome");
    this.fields.set("birthday","Data Nascimento");

    var map2 = new Map();
    map2.set("id", 1);
    map2.set("name", "Maurílio");
    map2.set("birthday", new Date().toLocaleDateString());
    this.values.push(map2);
    var map2 = new Map();
    map2.set("id", 2);
    map2.set("name", "Diogo");
    map2.set("birthday", new Date().toLocaleDateString());
    this.values.push(map2);
  }

  getEntries() {
    return this.fields.entries(); 
  }
}

@Pipe({name: 'mapValues'})
export class MapValuesPipe implements PipeTransform {
    transform(value: any, args?: any[]): Object[] {
        let returnArray = [];

        value.forEach((entryVal, entryKey) => {
            returnArray.push({
                key: entryKey,
                val: entryVal
            });
        });

        return returnArray;
    }
}