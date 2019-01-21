import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event, User } from '../_models';
import { environment } from '../../environments/environment';


@Injectable()
export class EventService {

    constructor(private http: HttpClient) {
    }

    getBusinessId(): string {
        return JSON.parse(localStorage.getItem("currentUser")).businessId;
    }

    getUserId(): string {
        return JSON.parse(localStorage.getItem("currentUser")).userId;
    }

    getAll(date?: Date) {
        if (date) {
            return this.http.get<Event[]>(`${environment.apiUrl}` + this.getBusinessId() + `/events?startDate=`+ date.toISOString());
        } else {
            return this.http.get<Event[]>(`${environment.apiUrl}` + this.getBusinessId() + `/events`);
        }
    }

    getByTime(date: Date, endDate: Date, id: string) {
        return this.http.get<Event[]>(`${environment.apiUrl}` + this.getBusinessId() + `/events?userId=` + id + '&startDate=' + date.toISOString() + '&endDate=' + endDate.toISOString());
    }

    getByCheckedId(date: Date) {
        return this.http.get<Event[]>(`${environment.apiUrl}` + this.getBusinessId() + `/events?userId=` + this.getUserId() + '&startDate=' + date.toISOString() + '&checked=' + true);
    }

    getById(id: string) {
        return this.http.get(`${environment.apiUrl}` + this.getBusinessId() + `/events/` + id);
    }

    register(event: Event) {
        return this.http.post(`${environment.apiUrl}` + this.getBusinessId() + `/events`, event).map(resp => resp);
    }

    update(event: Event) {
        return this.http.put(`${environment.apiUrl}` + this.getBusinessId() + `/events/` + event.id, event).map(resp => resp);
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}` + this.getBusinessId() + `/events/` + id).map(resp => resp);
    }
}