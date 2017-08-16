import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyurvedicTherapyComponent } from './ayurvedic-therapy.component';

describe('AyurvedicTherapyComponent', () => {
  let component: AyurvedicTherapyComponent;
  let fixture: ComponentFixture<AyurvedicTherapyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyurvedicTherapyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyurvedicTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
