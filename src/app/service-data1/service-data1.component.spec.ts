import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceData1Component } from './service-data1.component';

describe('ServiceData1Component', () => {
  let component: ServiceData1Component;
  let fixture: ComponentFixture<ServiceData1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceData1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceData1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
