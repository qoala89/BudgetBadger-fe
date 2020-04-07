import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from '../model/group';
import { HttpClientService } from './http-client.service';
@Injectable({
  providedIn: 'root'
})
export class GroupService extends HttpClientService<Group> {
  constructor(http: HttpClient) {
    super(http);
    this.setObjectName(Group.name);
  }
}
