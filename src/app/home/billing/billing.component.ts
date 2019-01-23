import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/_models';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  @Output() close: EventEmitter<String> = new EventEmitter();
  @Input() event: Event;
  @Input() user: string;
  @Input() visible = false;

  constructor() { }

  registerForm: FormGroup;
  submitted = false;
  get f() { return this.registerForm.controls; }

  ngOnInit() {

  }

  onSubmit(){
     
  }

  hide(event) {
    let elementId: string = (event.target as Element).id;
    if (elementId == "customModal" || elementId == "close") {
      this.visible = false;
      this.closeModal();
    }
  }

  closeModal(): void {
    this.close.emit();
  }

}
