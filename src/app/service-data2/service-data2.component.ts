import { Component, OnInit } from '@angular/core';
import { Data3Service } from '../data3.service';

@Component({
  selector: 'app-service-data2',
  templateUrl: './service-data2.component.html',
  styleUrls: ['./service-data2.component.css']
})
export class ServiceData2Component implements OnInit {
  postData:any;
  productData:any;
  backendResp: any = [];
  backendRespFilter: any = [];
  id: any;
  oddEvenCSS: boolean = false;
  constructor(private mySer3 : Data3Service) {
    console.log(this.mySer3.data1);
    this.getDataFromUser();
    this.getDataFromProduct();
   }

  ngOnInit(): void {
  }

  getDataFromUser(){
    console.log(this.mySer3.getUserdata().subscribe(
      (res: any) => {
        console.log(res);
        this.postData = res;
        this.backendResp = res.slice();
        // console.log(this.backendResp);
        for (let i = 0; i < 15; i++) {
          // console.log(this.backendResp[0]);
          this.backendRespFilter.push(this.backendResp[i]);
          this.id = this.backendRespFilter.indexOf(i)
          // if (this.id % 2 == 0) {
          //   this.oddEvenCSS = false;
          // } else {
          //   this.oddEvenCSS = true;
          // }
        }

      },
      (err: any) => {
        console.log(err);
      }
      ));
      }

      getDataFromProduct(){
        console.log(this.mySer3.getProductData().subscribe(
          (res: any) => {console.log(res);
          this.productData = res;
          this.productData = this.productData.products;
          console.log(this.productData);
          this.productData.map((x:any)=>{
            console.log(x);
            x.year = 2016;
          })
          console.log(this.productData);
          },
          (err: any) => {console.log(err);})
        )
        }

  }
