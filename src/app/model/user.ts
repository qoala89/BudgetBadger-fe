import { Currency } from './currency' 

export class User {
    id:             number;
    firstName:      string;
    lastName:       string;
    email:          string;
    //rates: ExchangeRate[];
    mainCurrencyId:   number;
}