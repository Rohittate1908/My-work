import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  //public age: number =15;
  //age: number = 15;
  age: number = 20;  //Your age is 20 and This greater than 18
  showData : Boolean = true;
  Stud : any =["Ajay", "Amay", "Nitesh", "Rahul"];

  // num: any = 2; //Two
  num: any = 15;

  testClass1 : any;
  testClass2 : any;

  myStyle: any;
  myStyle2: any;

  constructor() { }

  ngOnInit(): void {
    //this.testClass1 = "test1";
    //this.testClass2 = "test2";

    if(this.age > 18){
      this.testClass1 = "test1";
      this.testClass2 = "test2";
    }

    this.myStyle = {'background-color': 'yellow', 'font-weight': 'bold'};
    this.myStyle2 = {'background-color': 'goldenrod', 'font-weight': 'italic'};

  }

}
