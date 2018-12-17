import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../_models';
import { environment } from '../../environments/environment';

@Injectable()
export class PatientService {

    constructor(private http: HttpClient) {
    }

    getBusinessId(): string {
        return JSON.parse(localStorage.getItem("currentUser")).businessId;
    }

    getAll() {
        return this.http.get<Patient[]>(`${environment.apiUrl}` + this.getBusinessId() + `/patients`);
    }

    getByName(name: string){
        if(!name || name == ""){
            return;
        }
        return this.http.get<Patient[]>(`${environment.apiUrl}` + this.getBusinessId() + `/patients?name=`+ name);//.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
    }

    getById(id: string) {
        return this.http.get(`${environment.apiUrl}` + this.getBusinessId() + `/patients/` + id);
    }

    register(patient: Patient) {
        return this.http.post(`${environment.apiUrl}` + this.getBusinessId() + `/patients/`, patient, {observe: 'response'});
    }

    update(patient: Patient) {
        return this.http.put(`${environment.apiUrl}` + this.getBusinessId() + `/patients/` + patient.id, patient).map(resp => resp);
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}` + this.getBusinessId() + `/patients/` + id).map(resp => resp);
    }
}