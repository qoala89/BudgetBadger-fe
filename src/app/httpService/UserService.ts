import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { HttpClientService } from './http-client.service';
@Injectable({
  providedIn: 'root'
})
export class UserService extends HttpClientService<User> {
  constructor(http: HttpClient) {
    super(http);
    this.setObjectName(User.name);
  }
}
