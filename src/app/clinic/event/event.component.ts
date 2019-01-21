import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService, RecordService, ConfigService } from '../../_services';
import { Record, Event, Patient, Config, Template } from '../../_models';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

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

  registerForm: FormGroup;
  event: Event;
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
          this.event = resp;
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

  close() {
    if (confirm("Deseja realmente encerrar essa consulta? Você não poderá alterar os dados depois.")) {
      this.record = <Record>this.registerForm.value;
      this.record.event = this.event;
      this.record.date = new Date();
      this.recordService.register(this.record).subscribe(resp => this.nav.navigate(["/event/list"]));
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
        .replace("#data", new Date(this.event.date).toLocaleDateString()).replace("#hora", new Date(this.event.date).toLocaleTimeString().slice(0,5));
    } else {
      return string;
    }
  }

}
