import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event, User } from '../_models';

@Injectable()
export class EventService {

    events: Array<Event>;

    constructor(private http: HttpClient) {
        this.events = new Array();
    }


    getAll() {
        return this.events.sort((n1, n2) => n1.date.getTime() - n2.date.getTime());
        //return this.http.get<Event[]>(`${environment.apiUrl}/events`);
    }

    getByTime(date: Date, interval: number, id: string) {
        //this should search in a range
        let endDate = new Date(date.getTime() + interval * 60000);
        return this.getAll().filter(e => e.user.id == id && e.date.getTime() >= date.getTime() && e.date.getTime() < endDate.getTime());
        //return this.http.get<Event[]>(`${environment.apiUrl}/events`);
    }

    getById(id: string) {
        return this.events.find(u => u.id == id);
        //return this.http.get(`${environment.apiUrl}/events/` + id);
    }

    register(event: Event) {
        this.events.push(event);
        //return this.http.post(`${environment.apiUrl}/events/register`, event);
    }

    update(event: Event) {
        this.delete(event.id);
        this.register(event);
        //return this.http.put(`${environment.apiUrl}/events/` + event.id, event);
    }

    delete(id: string) {
        this.events = this.events.filter(e => e.id !== id);
        //return this.http.delete(`${environment.apiUrl}/events/` + id);
    }
}