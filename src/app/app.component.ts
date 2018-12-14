import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {

    ngOnInit() {
        if (location.protocol === 'http:') {
            window.location.href = location.href.replace('http', 'https');
        }
    }
}