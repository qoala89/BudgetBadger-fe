import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentInterval } from '../model/paymentinterval';
import { HttpClientService } from './http-client.service';
@Injectable({
  providedIn: 'root'
})
export class PaymentIntervalService extends HttpClientService<PaymentInterval> {
  constructor(http: HttpClient) {
    super(http);
    this.setObjectName(PaymentInterval.name);
  }
}
