import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data1 ="This is a sample message from Service";
  

  constructor(private http: HttpClient) {
    // console.log("This is constuctor of service");
   }

   getData(){
    // return this.data1;
    return this.http.get('https://jsonplaceholder.typicode.com/users');
   }

   getDataRealTimeData(){
    
    // return this.http.get('https://jsonplaceholder.typicode.com/posts');
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  
 }