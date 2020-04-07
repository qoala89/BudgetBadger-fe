import { Currency } from './currency' 

export class User {
    firstName:      string;
    lastName:       string;
    email:          string;
    //rates: ExchangeRate[];
    mainCurrency:   Currency
}