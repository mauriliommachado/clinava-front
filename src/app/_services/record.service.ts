import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Record, Template } from '../_models';

@Injectable()
export class RecordService {


    constructor(private http: HttpClient) {

    }

    getBusinessId(): string {
        return JSON.parse(localStorage.getItem("currentUser")).businessId;
    }

    getUserId(): string {
        return JSON.parse(localStorage.getItem("currentUser")).userId;
    }

    register(record: Record) {
        return this.http.post(`${environment.apiUrl}` + this.getBusinessId() + `/records`, record);
    }

    getLastRecords(patientId: string) {
        return this.http.get(`${environment.apiUrl}` + this.getBusinessId() + `/records?userId=` + this.getUserId() + '&patientId=' + patientId);
    }

    getPDF(template: Template) {
        return this.http.post(`${environment.apiUrl}` + this.getBusinessId() + `/records/model`,template,{responseType:'arraybuffer'}).subscribe(resp =>{
            var file = new Blob([resp], {type: 'application/pdf'});
            var fileURL = URL.createObjectURL(file);
            window.open(fileURL,"Print")
        } );
    }
}