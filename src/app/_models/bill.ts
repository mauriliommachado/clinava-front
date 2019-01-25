import { PaymentMethod } from './payment_method'

export class Bill {
    id: number;
    document: string;
    description: string;
    validUntil: Date;
    nature: number;
    category: number;
    value: number;
    paymentMethod: PaymentMethod;
    status: number;
}

