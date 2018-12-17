import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { User } from '../_models';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiLogin}/auth/signin`, { username: username, password: password })
            .pipe(map(response => {
                // login successful if there's a jwt token in the response
                if (response && response.accessToken) {
                    console.log(response)
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(response));
                }
                return response;
            }));
    }

    signin(user: User) {
        return this.http.post<any>(`${environment.apiLogin}/auth/signin`, user)
            .pipe(map(response => {
                alert(response);
                return response;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.clear();
        localStorage.removeItem('currentUser');
        localStorage.clear();
    }
}