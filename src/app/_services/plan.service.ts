import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plan } from '../_models';
import { environment } from '../../environments/environment';

@Injectable()
export class PlanService {

    constructor(private http: HttpClient) {
    }

    getBusinessId(): string {
        return JSON.parse(localStorage.getItem("currentUser")).businessId;
    }

    getAll() {
        return this.http.get<Plan[]>(`${environment.apiUrl}` + this.getBusinessId() + `/plans`);
    }

    getByName(name: string){
        if(!name || name == ""){
            return;
        }
        return this.http.get<Plan[]>(`${environment.apiUrl}` + this.getBusinessId() + `/plans?name=`+ name);//.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
    }

    getById(ansCode: string) {
        return this.http.get(`${environment.apiUrl}` + this.getBusinessId() + `/plans/` + ansCode);
    }

    register(plan: Plan) {
        return this.http.post(`${environment.apiUrl}` + this.getBusinessId() + `/plans/`, plan, {observe: 'response'});
    }

    update(plan: Plan) {
        return this.http.put(`${environment.apiUrl}` + this.getBusinessId() + `/plans/`, plan).map(resp => resp);
    }

    delete(ansCode: string) {
        return this.http.delete(`${environment.apiUrl}` + this.getBusinessId() + `/plans/` + ansCode).map(resp => resp);
    }
}