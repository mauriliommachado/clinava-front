import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pacient, Contact, Address } from '../_models';
import { environment } from '../../environments/environment';

@Injectable()
export class PacientService {

    pacients: Array<Pacient>;

    constructor(private http: HttpClient) {
        this.pacients = new Array();
        let pacient = new Pacient();
        pacient.id = (this.pacients.length+1).toString();
        pacient.name = "Lucas Torres"
        let contact = new Contact();
        let address = new Address();
        address.city = "Volta Redonda";
        pacient.address = address;
        contact.contact= "(24) 981478088";
        pacient.contact= new Array<Contact>();
        pacient.contact.push(contact);
        pacient.birthday = new Date();
        this.register(pacient);
    }

 
    getAll() {
        return this.http.get<Pacient[]>(`${environment.apiUrl}/pacients`);
    }

    getByName(name: string){
        if(!name || name == ""){
            return;
        }
        return this.getAll();//.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
    }

    getById(id: string) {
        return this.http.get(`${environment.apiUrl}/pacients/` + id);
    }

    register(pacient: Pacient) {
        return this.http.post(`${environment.apiUrl}/pacients/`, pacient);
    }

    update(pacient: Pacient) {
        return this.http.put(`${environment.apiUrl}/pacients/` + pacient.id, pacient);
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/pacients/` + id);
    }
}