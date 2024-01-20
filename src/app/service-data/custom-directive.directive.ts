import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private custom: ElementRef) { 
    this.custom.nativeElement.style.color='black',
    this.custom.nativeElement.style.border='2px solid black',
    this.custom.nativeElement.style.background='aqua',
    this.custom.nativeElement.style.Height='100px'

  }

}
