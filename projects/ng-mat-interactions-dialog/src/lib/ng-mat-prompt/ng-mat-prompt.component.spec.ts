import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { NgMatInteractionsDialogService } from '../ng-mat-interactions-dialog.service'
import { NgMatPromptComponent } from './ng-mat-prompt.component';

describe('NgMatPromptComponent', () => {
  let component: NgMatPromptComponent;
  let fixture: ComponentFixture<NgMatPromptComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule, MatDialogModule],
      providers: [NgMatInteractionsDialogService, {provide: MatDialogRef, useValue: {}}, {provide: MAT_DIALOG_DATA, useValue: {} } ],
      declarations: [ NgMatPromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMatPromptComponent);
    component = fixture.componentInstance,
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(()=>{
    document.body.removeChild(compiled);
  });

});
