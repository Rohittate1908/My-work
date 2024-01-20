import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Data2Service } from './data2.service';

@Component({
  selector: 'app-service-data',
  templateUrl: './service-data.component.html',
  styleUrls: ['./service-data.component.css']
})
export class ServiceDataComponent implements OnInit {
  postData:any;
  constructor(private mySer: DataService, private mySer2: Data2Service) {
    //console.log(this.mySer.data1);
    this.dataFromService();
    // this.getDataFrombackend();
    this.getDataFromService2();
   }

  ngOnInit(): void {
    
  }
  
  
  dataFromService(){
    // this.mySer.getData();
    // console.log(this.mySer.getData());
    this.mySer.getData().subscribe(
      (res:any)=>{
        console.log(res);
      },
      (err:any)=>{
        console.log(err);
      }
    )
  }

  // getDataFrombackend(){
  //   console.log("This is from Angular Component");
  //   // let result = this.mySer.getDataRealTimeData();
  //   // console.log(result);
  //   this.mySer.getDataRealTimeData().subscribe(
  //     (res:any)=>{
  //       console.log(res);
  //       this.postData = res;
  //     },
  //     (err:any)=>{
  //       console.log(err);
  //     }
  //   )
  // }

  getDataFromService2(){
    this.mySer2.getData().subscribe(
      (res)=>{
        console.log(res);
        this.postData = res;
        this.postData.map((x:any)=>{
          console.log(x);
          x.year = 1994;
        })
        console.log(this.postData);
      },
      (err)=>{
        console.log(err);
      }
    )
    console.log(this.mySer2.getData());
}

}
