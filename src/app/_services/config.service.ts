import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Config } from '../_models/config';

@Injectable()
export class ConfigService {
    
    config: Config;

    constructor(private http: HttpClient) {
    }


    getConfig() {
        this.config = new Config();
        this.config.hourEnd = 18;
        this.config.hourInit = 8;
        this.config.interval = 30;
        return this.config;
        //return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: string) {
       
        //return this.http.get(`${environment.apiUrl}/users/` + id);
    }

    register(user: Config) {
        //return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    update(user: Config) {
        
        //return this.http.put(`${environment.apiUrl}/users/` + user.id, user);
    }

    delete(id: number) {
        //return this.http.delete(`${environment.apiUrl}/users/` + id);
    }
}