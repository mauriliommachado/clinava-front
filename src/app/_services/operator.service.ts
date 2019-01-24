import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Operator } from '../_models';
import { environment } from '../../environments/environment';

@Injectable()
export class OperatorService {

    constructor(private http: HttpClient) {
    }

    getBusinessId(): string {
        return JSON.parse(localStorage.getItem("currentUser")).businessId;
    }

    getAll() {
        return this.http.get<Operator[]>(`${environment.apiUrl}` + this.getBusinessId() + `/operators`);
    }

    getByName(name: string){
        if(!name || name == ""){
            return;
        }
        return this.http.get<Operator[]>(`${environment.apiUrl}` + this.getBusinessId() + `/operators?name=`+ name);//.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
    }

    getById(ansCode: string) {
        return this.http.get(`${environment.apiUrl}` + this.getBusinessId() + `/operators/` + ansCode);
    }

    register(operator: Operator) {
        return this.http.post(`${environment.apiUrl}` + this.getBusinessId() + `/operators/`, operator, {observe: 'response'});
    }

    update(operator: Operator) {
        return this.http.put(`${environment.apiUrl}` + this.getBusinessId() + `/operators/`, operator).map(resp => resp);
    }

    delete(ansCode: string) {
        return this.http.delete(`${environment.apiUrl}` + this.getBusinessId() + `/operators/` + ansCode).map(resp => resp);
    }
}