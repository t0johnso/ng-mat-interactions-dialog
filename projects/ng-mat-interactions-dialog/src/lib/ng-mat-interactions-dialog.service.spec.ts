import { TestBed } from '@angular/core/testing';

import { NgMatInteractionsDialogService } from './ng-mat-interactions-dialog.service';

describe('NgMatInteractionsDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgMatInteractionsDialogService = TestBed.get(NgMatInteractionsDialogService);
    expect(service).toBeTruthy();
  });
});
