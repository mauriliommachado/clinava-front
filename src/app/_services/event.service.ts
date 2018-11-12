import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event, User } from '../_models';

@Injectable()
export class EventService {

    events: Array<Event>;

    constructor(private http: HttpClient) {
        this.events = new Array();
        let event = new Event();
        event.date = new Date();
        event.date.setHours(8);
        event.date.setMinutes(30);
        event.user = new User();
        event.user.name = "Amanda Schmit";
        this.register(event);
        event = new Event();
        event.date = new Date();
        event.date.setDate(event.date.getDate());
        event.date.setHours(10);
        event.date.setMinutes(0);
        event.user = new User();
        event.user.name = "João Azevedo";
        this.register(event);
        event = new Event();
        event.date = new Date();
        event.date.setDate(event.date.getDate()+1);
        event.date.setHours(8);
        event.date.setMinutes(0);
        event.user = new User();
        event.user.name = "José Augusto";
        this.register(event);
        event = new Event();
        event.date = new Date();
        event.date.setDate(event.date.getDate()+1);
        event.date.setHours(8);
        event.date.setMinutes(30);
        event.user = new User();
        event.user.name = "Andréa Silva";
        this.register(event);
        event = new Event();
        event.date = new Date();
        event.date.setDate(event.date.getDate()+1);
        event.date.setHours(9);
        event.date.setMinutes(30);
        event.user = new User();
        event.user.name = "Ricardo Almeida";
        this.register(event);
        event = new Event();
        event.date = new Date();
        event.date.setDate(event.date.getDate()+2);
        event.date.setHours(9);
        event.date.setMinutes(0);
        event.user = new User();
        event.user.name = "Lucas Torres";
        this.register(event);
        event = new Event();
        event.date = new Date();
        event.date.setDate(event.date.getDate()+2);
        event.date.setHours(11);
        event.date.setMinutes(0);
        event.user = new User();
        event.user.name = "André Simões";
        this.register(event);
        event = new Event();
        event.date = new Date();
        event.date.setDate(event.date.getDate()+2);
        event.date.setHours(8);
        event.date.setMinutes(30);
        event.user = new User();
        event.user.name = "Nuno Braga";
        this.register(event);
        event = new Event();
        event.date = new Date();
        event.date.setDate(event.date.getDate()+3);
        event.date.setHours(8);
        event.date.setMinutes(0);
        event.user = new User();
        event.user.name = "Gustavo Costa";
        this.register(event);
        event = new Event();
        event.date = new Date();
        event.date.setDate(event.date.getDate()+3);
        event.date.setHours(10);
        event.date.setMinutes(30);
        event.user = new User();
        event.user.name = "Bruno Enescu asda";
        this.register(event);
        event = new Event();
        event.date = new Date();
        event.date.setDate(event.date.getDate()+3);
        event.date.setHours(8);
        event.date.setMinutes(30);
        event.user = new User();
        event.user.name = "Nuno Braga";
        this.register(event);
    }


    getAll() {
        return this.events;
        //return this.http.get<Event[]>(`${environment.apiUrl}/events`);
    }

    getByTime(date: Date) {
        return this.getAll().find(e => e.date.getFullYear() == date.getFullYear() && e.date.getMonth() == date.getMonth() && e.date.getDate() == date.getDate() && e.date.getHours() == date.getHours() && e.date.getMinutes() == date.getMinutes());
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

        //return this.http.put(`${environment.apiUrl}/events/` + event.id, event);
    }

    delete(id: number) {
        //return this.http.delete(`${environment.apiUrl}/events/` + id);
    }
}