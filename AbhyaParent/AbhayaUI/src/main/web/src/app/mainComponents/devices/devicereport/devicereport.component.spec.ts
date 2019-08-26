import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicereportComponent } from './devicereport.component';

describe('DevicereportComponent', () => {
  let component: DevicereportComponent;
  let fixture: ComponentFixture<DevicereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
