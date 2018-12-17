import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Config } from '../_models/config';

@Injectable()
export class ConfigService {
    

    constructor(private http: HttpClient) {
        
    }

    getBusinessId(): string {
        return JSON.parse(localStorage.getItem("currentUser")).businessId;
    }

    getConfig() {
        return this.http.get<Config[]>(`${environment.apiUrl}` + this.getBusinessId() + `/configurations`);
    }

    getById(id: string) {
       
        //return this.http.get(`${environment.apiUrl}/` + this.getBusinessId() + `/users/` + id);
    }

    register(config: Config) {
        return this.http.post(`${environment.apiUrl}` + this.getBusinessId() + `/configurations`, config);
    }

    update(config: Config) {
        if(!config.id){
            config.id = 0;
        }
        return this.http.put(`${environment.apiUrl}` + this.getBusinessId() + `/configurations/` + config.id, config);
    }

    delete(id: number) {
        //return this.http.delete(`${environment.apiUrl}/` + this.getBusinessId() + `/users/` + id);
    }
}