import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanicalertsComponent } from './panicalerts.component';

describe('PanicalertsComponent', () => {
  let component: PanicalertsComponent;
  let fixture: ComponentFixture<PanicalertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanicalertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanicalertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
