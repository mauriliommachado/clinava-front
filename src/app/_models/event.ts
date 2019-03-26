import {User, Patient, Record,Procedure, Bill} from "./";

export class Event {
    id: string;
    user: User;
    patient: Patient;
    bills: Bill[];
    date: Date;
    obs: string;
    duration: number;
    confirmed: boolean;
    finished: boolean;
    checkIn: Date;
    record: Record;
    procedures: Procedure[];
}

