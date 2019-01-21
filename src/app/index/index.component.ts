import { Component, OnInit } from '@angular/core';


@Component({
    templateUrl: 'index.component.html',
    styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {

    role: string;
    constructor() {

    }

    ngOnInit() {
        this.role = JSON.parse(localStorage.getItem("currentUser")).role.name;
    }

}