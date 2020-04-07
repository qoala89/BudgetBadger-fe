import { PaymentInterval } from './paymentinterval'
import { Price } from './price'


export class Item {
    id:         number;
    quantity:   number;
    weight:     number;
    articleId:  number;
    price:      Price;
    dateTime:   string;
    locationId: number;
    interval:   PaymentInterval;
    groupIds:   number[];
    buyerId:    number;
}