import { PaymentMethod, Event,Operator } from './index'

export class Bill {
    id: number;
    document: string;
    description: string;
    validUntil: Date;
    nature: number;
    category: number;
    value: number;
    paymentMethod: PaymentMethod;
    operator: Operator;
    event: Event;
    status: number;
}