import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {
    }

    getBusinessId(): string {
        return JSON.parse(localStorage.getItem("currentUser")).businessId;
    }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}` + this.getBusinessId() + `/users`)
            .map(res => res);
    }

    getAttendants() {
        return this.http.get<User[]>(`${environment.apiUrl}` + this.getBusinessId() + `/users?role=ROLE_ADMIN`).map(res => res);
        //return this.users.filter(u => u.role == "attendant");
    }

    getUsers() {
        return this.http.get<User[]>(`${environment.apiUrl}` + this.getBusinessId() + `/users`).map(res => res);
        //return this.users.filter(u => u.role == "user");
        //return this.http.get<User[]>(`${environment.apiUrl}/` + this.getBusinessId() + `/users`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}` + this.getBusinessId() + `/users/` + id).map(res => res);
        //return this.users.find(u => u.id == id);
        //return this.http.get(`${environment.apiUrl}/` + this.getBusinessId() + `/users/` + id);
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}` + this.getBusinessId() + `/users/`, user);
    }

    update(user: User) {
        return this.http.put(`${environment.apiUrl}` + this.getBusinessId() + `/users`, user).map(resp => resp);;
    }

    delete(id: string) {
        //this.users = this.users.filter(e => e.id !== id);
        return this.http.delete(`${environment.apiUrl}` + this.getBusinessId() + `/users/` + id)
    }
}