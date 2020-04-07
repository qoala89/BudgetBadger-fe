import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tag } from '../model/tag';
import { HttpClientService } from './http-client.service';
@Injectable({
  providedIn: 'root'
})
export class TagService extends HttpClientService<Tag> {
  constructor(http: HttpClient) {
    super(http);
    this.setObjectName(Tag.name);
  }
}
