import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, OnInit, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {
  Sample:any = "Hello Angular";

  // Constructor: 
	// It is responsible for Object creation of the class.
	// It is also responsible for dependency injection.
	// It is not a part of angular component life cycle. 
	// It is not a mandotory to write constructor in component, if we dont write angular will execute by default.
  constructor() {
    console.log("Constructor of the class");
   }

  //  Angular Life cycle:
	// Angular lifecycle consist of 8 lifecycle hooks or methods.
	// depend on situation every method will be called.
	
	
	// 1) onChanges
	// 2) onInit
	// 3) doCheck
	// 4) afterContentInit
	// 5) afterContentCheck
	// 6) afterViewInit
	// 7) afterViewCheck
	// 8) ngDestroy
	

   //ngOnInit: It is responsible for initialization/subscribe all the variables inside the DOM. 
   //          This Method will be called after onChange() Method.
  ngOnInit(): void {
    console.log("This is onInit Method"); 
  }

  // doCheck : 	This method is called for change detection purpose. 
  //             Whenever there will be chnage in the repective mothod then this will be detected by doCheck.
  ngDoCheck(): void{
    //this.Sample="This is angular";
    console.log("This is ngDoCheck Method");
  }

  // onChanges: This method will execute first time when component came into picture/ came into DOM.
	// 		        Next time this method will call when there will be change in any input property of the component.
  ngOnChanges(): void{
    console.log("This is ngOnChanges Method");
  }

  // ngAfterContentInit: This will initilize content inside the component.
  ngAfterContentInit(){
    console.log("This is ngAfterContentInit Method");
  }

  // ngAfterContentChecked: This method will detect chnages in content.
  ngAfterContentChecked(){
    console.log("This is ngAfterContentChecked Method");
  }

  // ngAfterViewInit: This method will initilize component's own view.
  ngAfterViewInit(){
    console.log("This is ngAfterViewInit Method");
  }

  // ngAfterViewChecked: This method will detect chnages in own view of the component.
  ngAfterViewChecked(){
    console.log("This is the ngAfterViewChecked Method");
  }

  // ngDestroy() : unsubscribe all the component initilized variables from the DOM and now DOM is ready to render next component.
  ngOnDestroy(){
    console.log("Hello this is ngDestroy");
  }


}
