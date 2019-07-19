import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 

  }
  // '/api/products -> Retrieve all Products -> GET
  getProducts(){
    return this._http.get('/api/products');
  }
  // '/api/products/:id' -> Retrieve a Product by ID  -> GET
  getOneProduct(id: String){
    return this._http.get(`/api/products/${id}`);
  }
  // '/api/products' -> Create a Product -> POST
  postProductToServer(data: any){
    return this._http.post('/api/products', data);
  }
  // '/api/products/:id' -> Update a Product by ID -> PUT
  editOneProduct(id: String, data: any){
    return this._http.put(`/api/products/${id}`, data);
  }
  // '/api/products/:id' -> Delete a Product by ID -> DELETE
  deleteOneProduct(id: String){
    return this._http.delete(`/api/products/${id}`);
  }
}

