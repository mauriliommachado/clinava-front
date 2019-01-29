import {User, Patient, Record,Procedure} from "./";

export class Event {
    id: string;
    user: User;
    patient: Patient;
    date: Date;
    obs: string;
    duration: number;
    confirmed: boolean;
    finished: boolean;
    checkIn: Date;
    record: Record;
    procedures: Procedure[];
}

