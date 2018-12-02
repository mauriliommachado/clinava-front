import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from '../_models';
import { environment } from '../../environments/environment';


@Injectable()
export class RoleService {

    roles: Array<Role>;

    constructor(private http: HttpClient) {
        this.roles = new Array();
    }

    getAll() {
        this.http.get<Role[]>(`${environment.apiUrl}/roles`).subscribe((res: any[]) => {
            this.roles = res;
        });;
        return this.roles;
    }
}