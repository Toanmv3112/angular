import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _http:HttpClient) { }
  login(payload: any) {
    return this._http.post(`${environment.apiUrl}auth/login`, payload);
  }
}
