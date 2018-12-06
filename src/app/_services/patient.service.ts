import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../_models';
import { environment } from '../../environments/environment';

@Injectable()
export class PatientService {

    constructor(private http: HttpClient) {
    }

 
    getAll() {
        return this.http.get<Patient[]>(`${environment.apiUrl}/patients`);
    }

    getByName(name: string){
        if(!name || name == ""){
            return;
        }
        return this.getAll();//.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
    }

    getById(id: string) {
        return this.http.get(`${environment.apiUrl}/patients/` + id);
    }

    register(patient: Patient) {
        return this.http.post(`${environment.apiUrl}/patients/`, patient).map(resp => resp);
    }

    update(patient: Patient) {
        return this.http.put(`${environment.apiUrl}/patients/` + patient.id, patient).map(resp => resp);
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/patients/` + id).map(resp => resp);
    }
}