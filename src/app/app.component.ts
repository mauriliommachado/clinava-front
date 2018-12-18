import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {

    ngOnInit() {
        if(environment.production && location.protocol !== "https:"){
            location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
        }
    }
}