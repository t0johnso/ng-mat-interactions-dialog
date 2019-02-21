import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMatConfirmComponent } from './ng-mat-confirm.component';

describe('NgMatConfirmComponent', () => {
  let component: NgMatConfirmComponent;
  let fixture: ComponentFixture<NgMatConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMatConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMatConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
