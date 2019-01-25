import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bill } from '../_models';
import { environment } from '../../environments/environment';

@Injectable()
export class BillService {

    constructor(private http: HttpClient) {
    }

    getBusinessId(): string {
        return JSON.parse(localStorage.getItem("currentUser")).businessId;
    }

    getAll() {
        return this.http.get<Bill[]>(`${environment.apiUrl}` + this.getBusinessId() + `/bills`);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}` + this.getBusinessId() + `/bills/` + id);
    }

    register(bill: Bill) {
        return this.http.post(`${environment.apiUrl}` + this.getBusinessId() + `/bills/`, bill, {observe: 'response'});
    }

    update(bill: Bill) {
        return this.http.put(`${environment.apiUrl}` + this.getBusinessId() + `/bills/`, bill).map(resp => resp);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}` + this.getBusinessId() + `/bills/` + id).map(resp => resp);
    }
}