import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event, User } from '../_models';
import { environment } from '../../environments/environment';


@Injectable()
export class EventService {

    constructor(private http: HttpClient) {
    }


    getAll() {
        return this.http.get<Event[]>(`${environment.apiUrl}/events`);
    }

    getByTime(date: Date, interval: number, id: string) {
        //this should search in a range
        let endDate = new Date(date.getTime() + interval * 60000);
        return new Array().filter(e => e.user.id == id && e.date.getTime() >= date.getTime() && e.date.getTime() < endDate.getTime());
        //return this.http.get<Event[]>(`${environment.apiUrl}/events?userId=` + id + '&startTime=' + date.getTime() + '&startTime=' + date.getTime());
    }

    getById(id: string) {
        return this.http.get(`${environment.apiUrl}/events/` + id);
    }

    register(event: Event) {
        return this.http.post(`${environment.apiUrl}/events`, event).map(resp => resp);
    }

    update(event: Event) {
        return this.http.put(`${environment.apiUrl}/events/` + event.id, event).map(resp => resp);
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/events/` + id).map(resp => resp);
    }
}