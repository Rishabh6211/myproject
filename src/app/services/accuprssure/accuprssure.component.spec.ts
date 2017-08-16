import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccuprssureComponent } from './accuprssure.component';

describe('AccuprssureComponent', () => {
  let component: AccuprssureComponent;
  let fixture: ComponentFixture<AccuprssureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccuprssureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccuprssureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
