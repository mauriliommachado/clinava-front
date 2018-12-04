import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        if (localStorage.getItem("currentUser")) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ` + JSON.parse(localStorage.getItem("currentUser")).accessToken,
                    "Content-Type": "application/json"
                }
            });
        }
        return next.handle(request);
    }
}