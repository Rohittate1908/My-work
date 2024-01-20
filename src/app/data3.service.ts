import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data3Service {
  public data1 ="This is a sample message from Service";
  constructor(private http: HttpClient) { }

  getUserdata(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getProductData(){
    return this.http.get('https://dummyjson.com/products');
  }
}




