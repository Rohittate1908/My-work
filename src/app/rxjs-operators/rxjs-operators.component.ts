import { Component, OnInit } from '@angular/core';
import { from, of, map, filter } from 'rxjs';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent implements OnInit {

  constructor() { }

  arr:any = [1,2,3,4,5];
  dataStream:any;
  


  ngOnInit(): void {
    
    this.dataStream = from (this.arr);
	this.dataStream = of(1,2,3,4,5,6,7,8,9);
    console.log(this.dataStream);
    console.log(this.arr);

    this.dataStream.subscribe(
      (res:any)=>{console.log(res);},
      (err:any)=>{console.log(err);}
    );

    this.dataStream.pipe(map((x:any)=>x*5)).subscribe(
      (res:any)=>{console.log(res);})
    
    this.dataStream.pipe(map((x:any)=>x*5),
    filter((y:any)=> y%2 == 0)
    ).subscribe(
      (res:any)=>{console.log(res);})

  }

  

}
