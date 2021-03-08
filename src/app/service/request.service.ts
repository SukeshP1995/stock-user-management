import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  apiUrl = "https://stock-app-api.vercel.app/api/units"

  constructor(private http: HttpClient) { }

  addUser(user: any) {
    return this.http.post(`${this.apiUrl}/users/add`, user);
  }

}
