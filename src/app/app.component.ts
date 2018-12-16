import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {

    ngOnInit() {
        if(location.protocol != "https" && location.hostname != "localhost"){
            console.log(location)
            location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
        }
    }
}