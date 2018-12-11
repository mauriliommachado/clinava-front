import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from '../_models';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(`https://clinava.herokuapp.com/api/auth/signin`, { username: username, password: password })
            .pipe(map(response => {
                // login successful if there's a jwt token in the response
                if (response && response.accessToken) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(response));
                }
                return response;
            }));
    }

    signin(user: User) {
        return this.http.post<any>(`https://clinava.herokuapp.com/api/auth/signup`, user)
            .pipe(map(response => {
                alert(response);
                return response;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}