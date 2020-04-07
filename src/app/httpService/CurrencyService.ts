import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Currency } from '../model/currency';
import { HttpClientService } from './http-client.service';
@Injectable({
  providedIn: 'root'
})
export class CurrencyService extends HttpClientService<Currency> {
  constructor(http: HttpClient) {
    super(http);
    this.setObjectName(Currency.name);
  }
}
