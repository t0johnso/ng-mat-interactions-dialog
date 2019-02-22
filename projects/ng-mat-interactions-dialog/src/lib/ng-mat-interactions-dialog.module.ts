import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material';
import { NgMatAlertComponent } from './ng-mat-alert/ng-mat-alert.component';
import { NgMatConfirmComponent } from './ng-mat-confirm/ng-mat-confirm.component';
import { NgMatPromptComponent } from './ng-mat-prompt/ng-mat-prompt.component';

@NgModule({
  declarations: [NgMatAlertComponent, NgMatConfirmComponent, NgMatPromptComponent],
  imports: [CommonModule, FormsModule, MatButtonModule, MatDialogModule ],
  providers: [ {provide: MAT_DIALOG_DATA, useValue: {} }],
  entryComponents: [NgMatAlertComponent, NgMatConfirmComponent, NgMatPromptComponent]
})
export class NgMatInteractionsDialogModule { }
