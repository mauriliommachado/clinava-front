import { PaymentMethod, Event } from './index'

export class Bill {
    id: number;
    document: string;
    description: string;
    validUntil: Date;
    nature: number;
    category: number;
    value: number;
    paymentMethod: PaymentMethod;
    event: Event;
    status: number;
}