import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPipe2Component } from './angular-pipe2.component';

describe('AngularPipe2Component', () => {
  let component: AngularPipe2Component;
  let fixture: ComponentFixture<AngularPipe2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularPipe2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularPipe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
