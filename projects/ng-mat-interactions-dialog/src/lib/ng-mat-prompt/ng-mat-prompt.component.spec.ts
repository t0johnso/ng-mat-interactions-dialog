import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMatPromptComponent } from './ng-mat-prompt.component';

describe('NgMatPromptComponent', () => {
  let component: NgMatPromptComponent;
  let fixture: ComponentFixture<NgMatPromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMatPromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMatPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
