import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { stringify } from '@angular/core/src/render3/util';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {

    ngOnInit() {
        if(environment.production){
            console.log(location.protocol === "https:");
            console.log(new String(location.protocol) !== new String("https:"))
            console.log(location.protocol.match("https") === null)
        }
    }
}