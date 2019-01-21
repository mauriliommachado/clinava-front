import {User, Patient, Event} from "./";

export class Record {
    id: string;
    user: User;
    patient: Patient;
    event: Event;
    date: Date;
    anamnese: string;
    evolution: string;
    diagnosis1: string;
    diagnosis2: string;
    diagnosis3: string;
    diagnosis4: string;
    prescriptions: string;
    exams: string;
    attest: string;
}

