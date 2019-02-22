import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { NgMatInteractionsDialogService } from '../ng-mat-interactions-dialog.service'
import { NgMatConfirmComponent } from './ng-mat-confirm.component';

describe('NgMatConfirmComponent', () => {
  let component: NgMatConfirmComponent;
  let fixture: ComponentFixture<NgMatConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule, MatDialogModule],
      providers: [NgMatInteractionsDialogService, {provide: MatDialogRef, useValue: {}}, {provide: MAT_DIALOG_DATA, useValue: {} } ],
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
