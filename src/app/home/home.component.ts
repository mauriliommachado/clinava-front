import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Routes, RouterModule } from '@angular/router';
import { User } from '../_models';
import { UserService } from '../_services';


@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    title: String;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        //this.loadAllUsers();
    }

}