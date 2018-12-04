import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { first } from 'rxjs/operators';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {
    }


    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`)
            .map(res => res);
    }

    getAttendants() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`).map(res => res);
        //return this.users.filter(u => u.role == "attendant");
    }

    getUsers() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`).map(res => res);
        //return this.users.filter(u => u.role == "user");
        //return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/users/` + id).map(res => res);
        //return this.users.find(u => u.id == id);
        //return this.http.get(`${environment.apiUrl}/users/` + id);
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/users/`, user);
    }

    update(user: User) {
        return this.http.put(`${environment.apiUrl}/users`, user);
    }

    delete(id: string) {
        //this.users = this.users.filter(e => e.id !== id);
        return this.http.delete(`${environment.apiUrl}/users/`+id)
    }
}