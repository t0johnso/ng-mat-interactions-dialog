import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgMatInteractionsDialogComponent } from './ng-mat-interactions-dialog.component';
import { MatButtonModule, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material';
import { NgMatAlertComponent } from './ng-mat-alert/ng-mat-alert.component';
import { NgMatConfirmComponent } from './ng-mat-confirm/ng-mat-confirm.component';
import { NgMatPromptComponent } from './ng-mat-prompt/ng-mat-prompt.component';

@NgModule({
  declarations: [NgMatInteractionsDialogComponent, NgMatAlertComponent, NgMatConfirmComponent, NgMatPromptComponent],
  imports: [ FormsModule, MatButtonModule, MatDialogModule ],
  exports: [NgMatInteractionsDialogComponent],
  providers: [ {provide: MAT_DIALOG_DATA, useValue: {} }],
  entryComponents: [NgMatAlertComponent, NgMatConfirmComponent, NgMatPromptComponent]
})
export class NgMatInteractionsDialogModule { }
