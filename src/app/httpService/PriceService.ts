import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Price } from '../model/price';
import { HttpClientService } from './http-client.service';
@Injectable({
  providedIn: 'root'
})
export class PriceService extends HttpClientService<Price> {
  constructor(http: HttpClient) {
    super(http);
    this.setObjectName(Price.name);
  }
}
