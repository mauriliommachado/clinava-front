import {User, Patient} from "./";

export class Event {
    id: string;
    user: User;
    patient: Patient;
    date: Date;
    obs: string;
    duration: number;
}
