import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { NgMatInteractionsDialogService } from '../ng-mat-interactions-dialog.service'
import { NgMatAlertComponent } from './ng-mat-alert.component';

describe('NgMatAlertComponent', () => {
  let component: NgMatAlertComponent;
  let fixture: ComponentFixture<NgMatAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule, MatDialogModule],
      providers: [NgMatInteractionsDialogService, {provide: MatDialogRef, useValue: {}}, {provide: MAT_DIALOG_DATA, useValue: {} } ],
      declarations: [NgMatAlertComponent]
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
