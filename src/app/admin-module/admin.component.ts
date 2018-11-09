import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../_models';
import { UserService, AlertService } from '../_services';


@Component({
    templateUrl: 'admin.component.html',
    styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        //this.loadAllUsers();
    }
}