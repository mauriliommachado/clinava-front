import {User, Pacient} from "./";

export class Event {
    id: string;
    user: User;
    pacient: Pacient;
    date: Date;
    obs: string;
    duration: number;
}
