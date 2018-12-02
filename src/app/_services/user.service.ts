import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    users: Array<User>;
    currentUser: User;

    constructor(private http: HttpClient) {
        this.users = new Array();
    }


    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`) 
        .map(res => res );
    }

    getAttendants() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`).map(res => res );
        //return this.users.filter(u => u.role == "attendant");
    }

    getUsers() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`).map(res => res );
        //return this.users.filter(u => u.role == "user");
        //return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/users/`+ id).map(res => res );
        //return this.users.find(u => u.id == id);
        //return this.http.get(`${environment.apiUrl}/users/` + id);
    }

    register(user: User) {
        this.users.push(user);
        //return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${environment.apiUrl}/users`, user).subscribe((res: any[]) => {
        });
    }

    delete(id: string) {
        //this.users = this.users.filter(e => e.id !== id);
        return this.http.delete(`${environment.apiUrl}/users`).subscribe((res: any[]) => {
        });;
    }
}