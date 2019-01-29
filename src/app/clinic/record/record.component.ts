import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService, RecordService, ConfigService } from '../../_services';
import { Record, Event, Patient, Config, Template, Plan, Procedure } from '../../_models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class EventComponent implements OnInit {
  procedures: Procedure[];

  constructor(private route: ActivatedRoute,
    private nav: Router,
    private configService: ConfigService,
    private eventService: EventService,
    private recordService: RecordService,
    private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      anamnese: [''],
      evolution: [''],
      diagnosis1: [''],
      diagnosis2: [''],
      diagnosis3: [''],
      diagnosis4: [''],
      prescriptions: [''],
      exams: [''],
      attest: [''],
    });
    this.record = new Record();
    this.event = new Event();
    this.event.patient = new Patient();

  }

  private eventsSubject: Subject<Event> = new Subject<Event>();
  event: Event;
  registerForm: FormGroup;
  record: Record;
  pastRecords: Record[];
  ptName: string;
  config: Config;

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (!params["event"]) {
        alert("Selecione um atendimento.");
        this.nav.navigate(["/event/list"]);
      } else {
        this.eventService.getById(params["event"]).subscribe((resp: Event) => {
          if (resp.finished) {
            alert("Esta consulta já foi encerrada.");
            this.nav.navigate(["/event/list"]);
          }
          if (!resp.procedures) {
            resp.procedures = new Array();
          }
          this.procedures = resp.procedures;
          this.event = resp;
          this.eventsSubject.next(resp);
          this.recordService.getLastRecords(resp.patient.id).subscribe(resp => this.pastRecords = <Record[]>resp);
          this.configService.getConfig().subscribe(resp => {
            this.config = resp[0];
            this.registerForm = this.formBuilder.group({
              anamnese: [this.replaceMarkers(this.config.anamneseTemplate)],
              evolution: [''],
              diagnosis1: [''],
              diagnosis2: [''],
              diagnosis3: [''],
              diagnosis4: [''],
              prescriptions: [this.replaceMarkers(this.config.prescriptionTemplate)],
              exams: [''],
              attest: [this.replaceMarkers(this.config.attestTemplate)],
            });
          });
        });
      }
    });
  }

  setProcedures(procedures: Procedure[]) {
    this.procedures = procedures;
  }

  close() {

    if (confirm("Deseja realmente encerrar essa consulta? Você não poderá alterar os dados depois.")) {
      this.record = <Record>this.registerForm.value;
      this.record.event = this.event;
      this.record.date = new Date();
      this.record.procedures = this.procedures;
      this.recordService.register(this.record).subscribe(resp => this.nav.navigate(["/record/list"]));
    }
  }

  print(doc) {
    let template = new Template();
    template.attendantName = this.event.user.name;
    template.patientName = this.event.patient.name;
    template.crm = this.event.user.crm;
    switch (doc) {
      case "attest":
        template.docName = "Atestado Médico";
        template.text = (<Record>this.registerForm.value).attest;
        break;
      case "exams":
        template.docName = "Pedido de Exames";
        template.text = (<Record>this.registerForm.value).exams;
        break;
      case "prescriptions":
        template.docName = "Precrição";
        template.text = (<Record>this.registerForm.value).prescriptions;
        break;
      default:
        return;
    }
    this.recordService.getPDF(template);
  }

  replaceMarkers(string: string) {
    if (string) {
      return string.replace("#cliente", this.event.patient.name == null ? "____" : this.event.patient.name).replace("#cpf", this.event.patient.cpf == null ? "____" : this.event.patient.cpf)
        .replace("#crm", this.event.user.crm == null ? "____" : this.event.user.crm)
        .replace("#data", new Date(this.event.date).toLocaleDateString()).replace("#hora", new Date(this.event.date).toLocaleTimeString().slice(0, 5));
    } else {
      return string;
    }
  }

}
