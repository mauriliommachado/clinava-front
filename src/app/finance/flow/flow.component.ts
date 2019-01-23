import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/_models';

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css']
})
export class FlowComponent implements OnInit {

  constructor() { }

  registerForm: FormGroup;
  submitted = false;
  users: User[];
  get f() { return this.registerForm.controls; }


  ngOnInit() {
  }

  onSubmit(){
     
  }
}
