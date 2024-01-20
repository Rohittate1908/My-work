import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myForm:any;
  isFormSubmitted:boolean= false;
  constructor(private fb:FormBuilder ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      fname:['Rohit', [Validators.required]],
      lname:['', [Validators.required, Validators.maxLength(5)]],
      email:['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      gender:['', [Validators.required]],
      pass:[''],
      cpass:['']
    })
  }

  get f(){
    return this.myForm.controls;
  }

  onSubmitReactiveForm(){
    console.log("Hello");
    // console.log(this.myForm);
    console.log(this.myForm.value);
    this.isFormSubmitted = true;
  }

}
