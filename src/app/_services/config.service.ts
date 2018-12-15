import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Config } from '../_models/config';

@Injectable()
export class ConfigService {
    

    constructor(private http: HttpClient) {
        
    }


    getConfig() {
        return this.http.get<Config[]>(`${environment.apiUrl}/configurations`);
    }

    getById(id: string) {
       
        //return this.http.get(`${environment.apiUrl}/users/` + id);
    }

    register(config: Config) {
        return this.http.post(`${environment.apiUrl}/configurations`, config);
    }

    update(config: Config) {
        return this.http.put(`${environment.apiUrl}/configurations/` + config.id, config);
    }

    delete(id: number) {
        //return this.http.delete(`${environment.apiUrl}/users/` + id);
    }
}