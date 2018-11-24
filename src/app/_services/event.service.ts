import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event, User } from '../_models';
import { useAnimation } from '@angular/animations';

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

    getByTime(date: Date, id: string) {
        //this should search in a range
        return this.getAll().find(e => e.user.id == id && e.date.getFullYear() == date.getFullYear() && e.date.getMonth() == date.getMonth() && e.date.getDate() == date.getDate() && e.date.getHours() == date.getHours() && e.date.getMinutes() == date.getMinutes());
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