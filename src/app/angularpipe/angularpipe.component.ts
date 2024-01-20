import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angularpipe',
  templateUrl: './angularpipe.component.html',
  styleUrls: ['./angularpipe.component.css']
})
export class AngularpipeComponent implements OnInit {
  sampleText:string="Angular Pipes";
  courses:any =['BE','BCA','BTech','BSC'];
  date1 = new Date();

  data:any = [
    {name:"Ajay", age:30 },
    {name:"Nitesh", age:31 },
    {name:"Shrikant", age:27 }
];

salary:any= 100000;

  constructor() { }

  ngOnInit(): void {
  }

}
