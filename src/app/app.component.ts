import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {

    ngOnInit() {
        if(environment.production){
            console.log(location.protocol !== "https")
            
        }
    }
}