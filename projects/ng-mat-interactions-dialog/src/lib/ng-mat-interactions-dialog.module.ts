import { NgModule } from '@angular/core';
import { NgMatInteractionsDialogComponent } from './ng-mat-interactions-dialog.component';
import { NgMatAlertComponent } from './ng-mat-alert/ng-mat-alert.component';
import { NgMatConfirmComponent } from './ng-mat-confirm/ng-mat-confirm.component';
import { NgMatPromptComponent } from './ng-mat-prompt/ng-mat-prompt.component';

@NgModule({
  declarations: [NgMatInteractionsDialogComponent, NgMatAlertComponent, NgMatConfirmComponent, NgMatPromptComponent],
  imports: [
  ],
  exports: [NgMatInteractionsDialogComponent]
})
export class NgMatInteractionsDialogModule { }
