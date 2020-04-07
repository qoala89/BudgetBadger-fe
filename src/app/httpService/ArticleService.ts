import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../model/article';
import { HttpClientService } from './http-client.service';
@Injectable({
  providedIn: 'root'
})
export class ArticleService extends HttpClientService<Article> {
  constructor(http: HttpClient) {
    super(http);
    this.setObjectName(Article.name);
  }
}
