import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data4Service {

  constructor(private http: HttpClient) { }

  getPromData(){
    return this.http.get('https://dummyjson.com/products/categories').toPromise();
   }
}
