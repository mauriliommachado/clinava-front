import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pacient } from '../_models';

@Injectable()
export class PacientService {

    pacients: Array<Pacient>;

    constructor(private http: HttpClient) {
        this.pacients = new Array();
        let pacient = new Pacient();
        pacient.id = (this.pacients.length+1).toString();
        pacient.name = "Lucas Torres"
        this.register(pacient);
    }


    getAll() {
        return this.pacients;
        //return this.http.get<Pacient[]>(`${environment.apiUrl}/pacients`);
    }

    getById(id: string) {
        return this.pacients.find(u => u.id == id);
        //return this.http.get(`${environment.apiUrl}/pacients/` + id);
    }

    register(pacient: Pacient) {
        this.pacients.push(pacient);
        //return this.http.post(`${environment.apiUrl}/pacients/register`, pacient);
    }

    update(pacient: Pacient) {
        this.delete(pacient.id);
        this.register(pacient);
        //return this.http.put(`${environment.apiUrl}/pacients/` + pacient.id, pacient);
    }

    delete(id: string) {
        this.pacients = this.pacients.filter(e => e.id !== id);
        //return this.http.delete(`${environment.apiUrl}/pacients/` + id);
    }
}