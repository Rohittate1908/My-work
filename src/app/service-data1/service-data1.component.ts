import { Component, OnInit } from '@angular/core';
import { Data1Service } from './data1.service';

@Component({
  selector: 'app-service-data1',
  templateUrl: './service-data1.component.html',
  styleUrls: ['./service-data1.component.css']
})
export class ServiceData1Component implements OnInit {
  postData:any;
  products1:any;
  
  constructor(private sb:Data1Service) { 
    this.getDataFromService();
  }

  ngOnInit(): void {
  }

  getDataFromService(){
    // this.an.getData();
    
    this.sb.getData().subscribe(
      (res:any)=>{
        console.log(res);
        // this.postData = res;
        this.products1 = res.products;
        let year = 2001;
        for(let x of this.products1){
          year= year + 1;
          x.year = year;
        }
      },
      (err:any)=>{
        console.log(err);
      }
    )
    // console.log(this.postData);
    // console.log(this.sb.getData());
  }
    
}
