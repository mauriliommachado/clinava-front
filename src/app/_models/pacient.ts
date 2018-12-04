import {Address} from "./address";
import { Contact } from "./contact";

export class Pacient {

    id: string;
    name: string;
    email: string;
    cpf: string;
    birthday: Date;
    contact: Contact[];
    address: Address;
    
}

