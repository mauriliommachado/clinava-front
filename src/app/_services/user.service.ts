﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models';

@Injectable()
export class UserService {
    
    users: Array<User>;

    constructor(private http: HttpClient) {
        this.users = new Array();
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
        
        //return this.http.put(`${environment.apiUrl}/users/` + user.id, user);
    }

    delete(id: number) {
        //return this.http.delete(`${environment.apiUrl}/users/` + id);
    }
}