import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMatInteractionsDialogComponent } from './ng-mat-interactions-dialog.component';

describe('NgMatInteractionsDialogComponent', () => {
  let component: NgMatInteractionsDialogComponent;
  let fixture: ComponentFixture<NgMatInteractionsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMatInteractionsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMatInteractionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
