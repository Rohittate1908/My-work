import { Component, OnInit } from '@angular/core';
import { Data4Service } from './data4.service';


@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor(private ser: Data4Service) { }

  ngOnInit(): void {
    const prom = new Promise(function (resolve, reject){
      setTimeout(() => {
        resolve("Promise resolved ++2 ");
        reject(" Promise reject++3 ");
      }, 4000);
    });

    prom.then((value:any)=>{
      console.log("Promise Executed " +value);
    })
    .catch((value:any)=>{
      console.log("Promise not executed "+ value )
    });

    this.getdataFromPromise();
  }

  getdataFromPromise(){
      this.ser.getPromData()
      .then((res:any)=>{
        console.log(res);
      })
      .catch((err:any)=>{
        console.log(err);
      })
  }
}

