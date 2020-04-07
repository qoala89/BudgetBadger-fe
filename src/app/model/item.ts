import { PaymentInterval } from './paymentinterval'
import { Article } from './article'
import { Price } from './price'
import { Group } from './group'
import { User } from './user'
import { Location } from './location'


export class Item {
    quantity:   number;
    weight:     number;
    article:    Article;
    price:      Price;
    dateTime:   string;
    location:   Location;
    interval:   PaymentInterval;
    groups:     Group[];
    buyer:      User;
}