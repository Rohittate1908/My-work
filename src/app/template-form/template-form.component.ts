import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  courses: any = ['Select', 'BE', 'BCA', 'BTech', 'BSc'];
  data: any = [];
  showData: Boolean = false;
  showUpdate: Boolean = false;
  i :any;
  firstName: any;
  lastName:any;
  gender:any;
  male:any;
  female: any;
  constructor() { }

  ngOnInit(): void {

  }
  onSubmitForm(frm: any) {
    console.log(frm.value);
    // console.log(frm.value.fname);
    //console.log("Hello form is submitted");
    this.data.push(frm.value);
    let data = frm.value;
    console.log(this.data);
    if (this.data.length > 0) {
      this.showData = true;
    }
    console.log(this.data);
  }


  onDelItem(dt: any) {
    console.log(dt);
    this.data.forEach((element:any)=>{
      console.log(element);
      if(dt.fname == element.fname){
        this.i = this.data.indexOf(dt)
        this.data.splice((this.i),1);
        //this.data.splice(this.data.indexOf(dt));
      }
    })
  }

  onEdit(edt: any) {
    // console.log(edt);
    this.firstName = edt.fname;
    this.lastName = edt.lname;
    this.male = edt. male;
    this.female = edt. female;
    this.i = this.data.indexOf(edt);
    this.showUpdate = true;
  }

  onUpdateForm(frm:any){
    console.log(frm.value);
    //this.i = this.data.indexOf(frm);
    this.data.splice(this.i, 1, frm.value);
    this.showUpdate = false;
  }

}












