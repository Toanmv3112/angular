import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryServiceService {
  constructor(private _http: HttpClient) {}
  create(payload: any) {
    return this._http.post(`${environment.apiUrl}categories/create`, payload);
    // return this._http.post(environment.apiUrl+'categories/create', payload);
  }
  list(currentPage:any=null): Observable<any> {
    // const myHeaders = new HttpHeaders({
    //    "Content-Type":'application/json',
    //    "Authorization":`Bearer ${token}`
    // });
    if(currentPage!=null){
      return this._http.get(`${environment.apiUrl}categories?page=${currentPage}`);
    }
    return this._http.get(`${environment.apiUrl}categories`);
    // return this._http.get(environment.apiUrl+'categories');
  }
  del(id: number) {
    return this._http.delete(`${environment.apiUrl}categories/${id}`)
  }
  getCategory(id:number){
    return this._http.get(`${environment.apiUrl}categories/${id}`)
  }
  update(id:number, payload:any){
    return this._http.put(`${environment.apiUrl}categories/${id}`, payload)
  }
}
