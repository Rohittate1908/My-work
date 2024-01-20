import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AngularpipeComponent } from './angularpipe/angularpipe.component';
import { CustPipe } from './angularpipe/cust.pipe';
import { CustDirDirective } from './directives/cust-dir.directive';
import { AngularPipe2Component } from './angular-pipe2/angular-pipe2.component';
import { CustPipe2Pipe } from './angular-pipe2/angularPipe2/cust-pipe2.pipe';
import { Task1Component } from './task1/task1.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildComponent } from './lifecycle/child/child.component';
import { ServiceDataComponent } from './service-data/service-data.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomDirectiveDirective } from './service-data/custom-directive.directive';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { ServiceData2Component } from './service-data2/service-data2.component';
import { PromiseComponent } from './promise/promise.component';
import { ServiceData1Component } from './service-data1/service-data1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { DashFormComponent } from './dash-form/dash-form.component';


@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectivesComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    AngularpipeComponent,
    CustPipe,
    CustDirDirective,
    AngularPipe2Component,
    CustPipe2Pipe,
    Task1Component,
    LifecycleComponent,
    ChildComponent,
    ServiceDataComponent,
    CustomDirectiveDirective,
    RxjsOperatorsComponent,
    ServiceData2Component,
    PromiseComponent,
    ServiceData1Component,
    DashboardComponent,
    FormComponent,
    DashFormComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
