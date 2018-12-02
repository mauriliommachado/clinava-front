import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available

            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXVyaWxpb21tYWNoYWRvQGdtYWlsLmNvbSIsImlhdCI6MTU0Mzc3MDcxMywiZXhwIjoxNTQzODU3MTEzfQ.RdyLcmz7udicllSxYixp8_1U2RN0XcrxN45Fr53XnGMUQB0UUJCxmYm6GWFsP4vW9dCI58vMDHZdL4S_LbVAIw`,
                    "Content-Type": "application/json"
                }
            });
        return next.handle(request);
    }
}