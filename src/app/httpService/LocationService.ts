import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '../model/location';
import { HttpClientService } from './http-client.service';
@Injectable({
  providedIn: 'root'
})
export class LocationService extends HttpClientService<Location> {
  constructor(http: HttpClient) {
    super(http);
    this.setObjectName(Location.name);
  }
}
