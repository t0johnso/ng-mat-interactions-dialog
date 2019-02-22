import { TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { NgMatInteractionsDialogService } from './ng-mat-interactions-dialog.service';

describe('NgMatInteractionsDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  providers: [NgMatInteractionsDialogService ],
  declarations: [],
  imports: [
    MatDialogModule
  ]
}));

  it('should be created', () => {
    const service: NgMatInteractionsDialogService = TestBed.get(NgMatInteractionsDialogService);
    expect(service).toBeTruthy();
  });
});
