import {Address} from "./address";
import { Plan } from "./plan";

export class Patient {

    id: string;
    name: string;
    email: string;
    cpf: string;
    birthday: Date;
    phone: string;
    address: Address;
    plan:Plan;
    
}

