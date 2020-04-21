import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';


// Handles HTTP requests
// This generic class can be used for all objects 

@Injectable({
  providedIn: 'root'
})
export class HttpClientService<T> {
  baseUrl: string;
  objName: string;

  constructor(private http: HttpClient) { 
    //this.baseUrl = 'http://0.0.0.0:3000'; // Mockoon
    this.baseUrl = 'api'; // InMemoryDB
  }

  setObjectName(objectName: string){
    this.objName = objectName.toLowerCase();
  }
  
  setBaseUrl(baseUrl: string): void {
    this.baseUrl = baseUrl;
  }

  getUrl(): string {
    return `${this.baseUrl}/${this.objName}`;
  }



  getAll(): Observable<T[]> {
    const url = `${this.baseUrl}/${this.objName}`;
    return this.http.get<T[]>(url).pipe(
      tap(_ => this.log(`Get all ${this.objName} from ${url}`)),
      catchError(this.handleError<T[]>(`Get all ${this.objName} from ${url}`))
    );
  }

  get(id: number): Observable<T> {
    const url = `${this.baseUrl}/${this.objName}/${id}`;
    return this.http.get<T>(url).pipe(
      tap(_ => this.log(`Get ${this.objName} from ${url}`)),
      catchError(this.handleError<T>(`Get ${this.objName} from ${url}`))
    );
  }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };

  put(newObj: T): Observable<T> {
    const url = `${this.baseUrl}/${this.objName}`;
    return this.http.put<T>(url, newObj, this.httpOptions).pipe(
      tap(_ => {
        this.log(`Put ${this.objName} to ${url}`);
        console.debug(newObj);
        }),
      catchError(this.handleError<T>(`Put ${this.objName} to ${url}`))
    );
  }
  

  post(newObj: T): Observable<T> {
    const url = `${this.baseUrl}/${this.objName}`;
    return this.http.post<T>(url, newObj, this.httpOptions)
      .pipe(
        tap( addedObj => this.log(`Added new ${this.objName} to ${url}`)),
        catchError(this.handleError<T>(`Added new ${this.objName} to ${url}`))
      );
  }


  delete(objId: number) :Observable<T> {
    const url = `${this.baseUrl}/${this.objName}/${objId}`;
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


