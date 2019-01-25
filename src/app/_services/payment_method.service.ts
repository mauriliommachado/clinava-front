import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentMethod } from '../_models';
import { environment } from '../../environments/environment';

@Injectable()
export class PaymentMethodService {

    constructor(private http: HttpClient) {
    }

    getBusinessId(): string {
        return JSON.parse(localStorage.getItem("currentUser")).businessId;
    }

    getAll() {
        return this.http.get<PaymentMethod[]>(`${environment.apiUrl}` + this.getBusinessId() + `/payment-methods`);
    }

    getByName(name: string){
        if(!name || name == ""){
            return;
        }
        return this.http.get<PaymentMethod[]>(`${environment.apiUrl}` + this.getBusinessId() + `/payment-methods?name=`+ name);
    }

    getById(ansCode: string) {
        return this.http.get(`${environment.apiUrl}` + this.getBusinessId() + `/payment-methods/` + ansCode);
    }

    register(paymentMethod: PaymentMethod) {
        return this.http.post(`${environment.apiUrl}` + this.getBusinessId() + `/payment-methods/`, paymentMethod, {observe: 'response'});
    }

    update(paymentMethod: PaymentMethod) {
        return this.http.put(`${environment.apiUrl}` + this.getBusinessId() + `/payment-methods/`, paymentMethod).map(resp => resp);
    }

    delete(ansCode: string) {
        return this.http.delete(`${environment.apiUrl}` + this.getBusinessId() + `/payment-methods/` + ansCode).map(resp => resp);
    }
}