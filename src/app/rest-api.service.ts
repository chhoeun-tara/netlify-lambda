import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestAPIService {
  // API = 'http://localhost:9000';
  API = '/.netlify/functions';

  constructor(
    private http: HttpClient
  ) { }

  getUser(): Observable<any> {
    return this.http.get(`${this.API}/getusers`);
  }
}
