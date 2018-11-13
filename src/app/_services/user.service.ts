import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models';

@Injectable()
export class UserService {

    users: Array<User>;
    currentUser:User;

    constructor(private http: HttpClient) {
        this.users = new Array();
        this.currentUser = new User();
        this.currentUser.id = (this.getAll().length + 1).toString();
        this.currentUser.name = "Maurílio Miranda Machado";
        this.currentUser.email = "mauriliommachado@gmail.com";
        this.currentUser.username = "mauriliommachado@gmail.com";
        this.currentUser.role = new Array("Administrador");
        this.register(this.currentUser);
    }


    getAll() {
        return this.users;
        //return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: string) {
        return this.users.find(u => u.id == id);
        //return this.http.get(`${environment.apiUrl}/users/` + id);
    }

    register(user: User) {
        this.users.push(user);
        //return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    update(user: User) {
        this.delete(user.id);
        this.register(user);
        //return this.http.put(`${environment.apiUrl}/users/` + user.id, user);
    }

    delete(id: string) {
        this.users = this.users.filter(e => e.id !== id);
        //return this.http.delete(`${environment.apiUrl}/users/` + id);
    }
}