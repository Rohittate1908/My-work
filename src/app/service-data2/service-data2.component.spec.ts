import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceData2Component } from './service-data2.component';

describe('ServiceData2Component', () => {
  let component: ServiceData2Component;
  let fixture: ComponentFixture<ServiceData2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceData2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceData2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
