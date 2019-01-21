import {Role} from "./roles";
import { Address } from "./address";
import { Contact } from "./contact";

export class User {

    id: string;
    username: string;
    password: string;
    name: string;
    email: string;
    roles: Role[];
    address: Address;
    contacts: Contact[];
    crm: string;
}