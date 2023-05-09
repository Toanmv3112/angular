import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) {}
  create(payload: any) {
    return this._http.post(`${environment.apiUrl}products/create`, payload);
  }
  list(currentPage:any=null): Observable<any> {
  
    if(currentPage!=null){
      return this._http.get(`${environment.apiUrl}products?page=${currentPage}`);
    }
    return this._http.get(`${environment.apiUrl}products`);
  }
  del(id: number) {
    return this._http.delete(`${environment.apiUrl}products/${id}`)
  }
  getProduct(id:number){
    return this._http.get(`${environment.apiUrl}products/${id}`)
  }
  update(id:number, payload:any){
    return this._http.put(`${environment.apiUrl}products/${id}`, payload)
  }
}
