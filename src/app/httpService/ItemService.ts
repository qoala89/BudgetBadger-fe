import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../model/item';
import { HttpClientService } from './http-client.service';
@Injectable({
  providedIn: 'root'
})
export class ItemService extends HttpClientService<Item> {
  constructor(http: HttpClient) {
    super(http);
    this.setObjectName(Item.name);
  }
}
