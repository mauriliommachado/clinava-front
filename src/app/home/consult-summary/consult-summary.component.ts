import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Event } from 'src/app/_models';
import { EventService } from '../../_services';

@Component({
  selector: 'app-consult-summary',
  templateUrl: './consult-summary.component.html',
  styleUrls: ['./consult-summary.component.css']
})
export class ConsultSummaryComponent implements OnInit {
  @Output() close: EventEmitter<String> = new EventEmitter();
  @Output() openBilling: EventEmitter<String> = new EventEmitter();
  @Input() event: Event = new Event();
  @Input() visible = false;
  formatedDate: string = "";

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.formatedDate = new Date(this.event.date).toLocaleString().substr(0, new Date(this.event.date).toLocaleString().length - 3);
  }

  closeModal(): void {
    this.close.emit();
  }

  confirm(event) {
    let elementId: string = (event.target as Element).id;
    if (elementId == "customModal" || elementId == "confirm") {
      this.event.confirmed = true;
      this.eventService.update(this.event).subscribe(resp => {
        this.visible = false;
        this.closeModal();
      });

    }
  }

  cancel(event) {
    let elementId: string = (event.target as Element).id;
    if (elementId == "customModal" || elementId == "cancel") {
      this.event.confirmed = false;
      this.event.checkIn = null;
      this.eventService.update(this.event).subscribe(resp => {
        this.visible = false;
        this.closeModal();
      });
    }
  }

  bill(event) {
    let elementId: string = (event.target as Element).id;
    if (elementId == "customModal" || elementId == "bill") {
      this.visible = false;
      this.openBilling.emit("oi")
    }
  }

  checkin(event) {
    let elementId: string = (event.target as Element).id;
    if (elementId == "customModal" || elementId == "checkin") {
      this.event.checkIn = new Date();
      this.event.confirmed = true;
      this.eventService.update(this.event).subscribe(resp => {
        this.visible = false;
        this.closeModal();
      });
    }
  }

  hide(event) {
    let elementId: string = (event.target as Element).id;
    if (elementId == "customModal" || elementId == "close") {
      this.visible = false;
      this.closeModal();
    }
  }
}