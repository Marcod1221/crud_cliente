import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { Client } from '../models/client';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  private apiURL = "http://127.0.0.1:8000/api";
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
    
  getAll(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.apiURL + '/client')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id: number): Observable<Client> {
    return this.httpClient.get<Client>(this.apiURL + '/client/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(this.apiURL + '/client', JSON.stringify(client), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  


  errorHandler(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
