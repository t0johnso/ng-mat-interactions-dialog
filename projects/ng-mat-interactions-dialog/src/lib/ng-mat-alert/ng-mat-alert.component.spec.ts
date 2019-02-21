import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMatAlertComponent } from './ng-mat-alert.component';

describe('NgMatAlertComponent', () => {
  let component: NgMatAlertComponent;
  let fixture: ComponentFixture<NgMatAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMatAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMatAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
