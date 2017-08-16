import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccupressureComponent } from './accupressure.component';

describe('AccupressureComponent', () => {
  let component: AccupressureComponent;
  let fixture: ComponentFixture<AccupressureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccupressureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccupressureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
