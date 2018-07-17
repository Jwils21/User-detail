import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { JsonResponse } from './JsonResponse'



@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  url = "http://localhost:50798/Users/";

  list(): Observable<JsonResponse>{
  	return this.http.get(this.url + "List") as Observable<JsonResponse>;
  }

  get(Id: number): Observable<JsonResponse> {
  	return this.http.get(this.url + "Get/" + Id) as Observable<JsonResponse>;
  }

  Create(user: User): Observable<JsonResponse> {
  	return this.http.post(this.url + "Create", user)  as Observable<JsonResponse>;
  }

  Change(user: User): Observable<JsonResponse> {
  	return this.http.post(this.url + "Change", user)  as Observable<JsonResponse>;
  }

  Remove(user: User): Observable<JsonResponse> {
  	return this.http.post(this.url + "Remove", user)  as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }
}
