import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data1Service {

  constructor(private rt: HttpClient) { 
    
  }

  getData(){
    return this.rt.get("https://dummyjson.com/products");
  }
}
