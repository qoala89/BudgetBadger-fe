import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Item } from './model/item';
import { Article } from './model/article';
import { Tag } from './model/tag';
import { Price } from './model/price';
import { Currency } from './model/currency';
import { User } from './model/user';
import { Group } from './model/group';
import { Location } from './model/location';
import { PaymentInterval } from './model/paymentinterval';


// Handles HTTP requests
// This generic class can be used for all objects 
// eg. Customer, Order, Articles

@Injectable({
  providedIn: 'root'
})
export class HttpClientService<T> {
  baseUrl: string;
  objName: string;

  setObjectName(objectName: string){
    this.objName = objectName.toLowerCase();
    this.baseUrl = "api/" + this.objName;
  }

  getUrl(): string {
    return this.baseUrl;
  }

  constructor(private http: HttpClient) { }


  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.baseUrl).pipe(
      tap(_ => this.log(`Get all ${this.objName} from ${this.baseUrl}`)),
      catchError(this.handleError<T[]>(`Get all ${this.objName} from ${this.baseUrl}`))
    );
  }

  get(id: number): Observable<T> {
    const url = this.baseUrl + "/" + id;
    return this.http.get<T>(url).pipe(
      tap(_ => this.log(`Get ${this.objName} from ${url}`)),
      catchError(this.handleError<T>(`Get ${this.objName} from ${url}`))
    );
  }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };

  put(newObj: T): Observable<T> {
    return this.http.put<T>(this.baseUrl, newObj, this.httpOptions).pipe(
      tap(_ => {
        this.log(`Put ${this.objName} to ${this.baseUrl}`);
        console.debug(newObj);
        }),
      catchError(this.handleError<T>(`Put ${this.objName} to ${this.baseUrl}`))
    );
  }
  

  post(newObj: T): Observable<T> {
    return this.http.post<T>(this.baseUrl, newObj, this.httpOptions)
      .pipe(
        tap( addedObj => this.log(`Added new ${this.objName} to ${this.baseUrl}`)),
        catchError(this.handleError<T>(`Added new ${this.objName} to ${this.baseUrl}`))
      );
  }


  delete(objId: number) :Observable<T> {
    console.log(objId);
    const url = this.baseUrl+"/"+objId;
    return this.http.delete<T>(url, this.httpOptions)
    .pipe(
      tap( _ => this.log(`Deleted ${this.objName} id ${objId} from ${url}`)),
      catchError(this.handleError<T>(`Deleted ${this.objName} id ${objId} from ${url}`))
    );
  }


  private handleError<T> (operation: string = 'operation') {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      console.error(error); 
      return throwError(`${operation} failed: ${error.message}`);
    };
  }

  private log(msg: string){
    console.log(this.objName+ ": " + msg);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ItemService extends HttpClientService<Item> {
  constructor(http: HttpClient){
    super(http);
    this.setObjectName(Item.name);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends HttpClientService<Article> {
  constructor(http: HttpClient){
    super(http);
    this.setObjectName(Article.name);
  }
}

@Injectable({
  providedIn: 'root'
})
export class TagService extends HttpClientService<Tag> {
  constructor(http: HttpClient){
    super(http);
    this.setObjectName(Tag.name);
  }
}

@Injectable({
  providedIn: 'root'
})
export class PriceService extends HttpClientService<Price> {
  constructor(http: HttpClient){
    super(http);
    this.setObjectName(Price.name);
  }
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyService extends HttpClientService<Currency> {
  constructor(http: HttpClient){
    super(http);
    this.setObjectName(Currency.name);
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService extends HttpClientService<User> {
  constructor(http: HttpClient){
    super(http);
    this.setObjectName(User.name);
  }
}

@Injectable({
  providedIn: 'root'
})
export class GroupService extends HttpClientService<Group> {
  constructor(http: HttpClient){
    super(http);
    this.setObjectName(Group.name);
  }
}

@Injectable({
  providedIn: 'root'
})
export class LocationService extends HttpClientService<Location> {
  constructor(http: HttpClient){
    super(http);
    this.setObjectName(Location.name);
  }
}

@Injectable({
  providedIn: 'root'
})
export class PaymentIntervalService extends HttpClientService<PaymentInterval> {
  constructor(http: HttpClient){
    super(http);
    this.setObjectName(PaymentInterval.name);
  }
}