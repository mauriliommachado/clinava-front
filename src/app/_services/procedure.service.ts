import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Procedure } from '../_models';
import { environment } from '../../environments/environment';

@Injectable()
export class ProcedureService {

    constructor(private http: HttpClient) {
    }

    getBusinessId(): string {
        return JSON.parse(localStorage.getItem("currentUser")).businessId;
    }

    getAll() {
        return this.http.get<Procedure[]>(`${environment.apiUrl}` + this.getBusinessId() + `/procedures`);
    }

    getByName(name: string){
        if(!name || name == ""){
            return;
        }
        return this.http.get<Procedure[]>(`${environment.apiUrl}` + this.getBusinessId() + `/procedures?name=`+ name);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}` + this.getBusinessId() + `/procedures/` + id);
    }

    register(procedure: Procedure) {
        return this.http.post(`${environment.apiUrl}` + this.getBusinessId() + `/procedures/`, procedure, {observe: 'response'});
    }

    update(procedure: Procedure) {
        return this.http.put(`${environment.apiUrl}` + this.getBusinessId() + `/procedures/`, procedure).map(resp => resp);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}` + this.getBusinessId() + `/procedures/` + id).map(resp => resp);
    }
}