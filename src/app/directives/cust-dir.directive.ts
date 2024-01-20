import { style } from '@angular/animations';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustDir]'
})
export class CustDirDirective {

  constructor(private ele: ElementRef) { 
    //console.log(this.ele);
    console.log(this.ele.nativeElement);
    this.ele.nativeElement.style.background = "skyblue";

    this.ele.nativeElement.style.color = "Red";

    //this.ele.nativeElement.style.background = "https://media.istockphoto.com/photos/forest-wooden-table-background-summer-sunny-meadow-with-green-grass-picture-id1353553203?b=1&k=20&m=1353553203&s=170667a&w=0&h=QTyTGI9tWQluIlkmwW0s7Q4z7R_IT8egpzzHjW3cSas=";
  }
      
}









