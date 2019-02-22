import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, DialogRole } from '@angular/material/dialog';
import { DialogData } from './dialog-data';
import { NgMatAlertComponent } from './ng-mat-alert/ng-mat-alert.component';
import { NgMatPromptComponent } from './ng-mat-prompt/ng-mat-prompt.component';
import { NgMatConfirmComponent } from './ng-mat-confirm/ng-mat-confirm.component';

@Injectable({
  providedIn: 'root'
})
export class NgMatInteractionsDialogService {

  constructor(
    public dialog: MatDialog,
  ) { }

  openDialog(
    // ariaType:string, component, data:DialogData) {
    ariaType:DialogRole, component, data?:DialogData ) {
    if(this.dialog.openDialogs.length) this.dialog.closeAll();
    const dialogRef = this.dialog.open(component, {
      // width: '250px',
      role: ariaType,
      data: data
    });
    console.log({ariaType, component, data});
    return dialogRef.afterClosed();
   // return Promise.resolve({ariaType, component, data});
  }

  alert(data?:DialogData){
    return this.openDialog('alertdialog', NgMatAlertComponent, data);
  }

  prompt(data?:DialogData){
    return this.openDialog('dialog', NgMatPromptComponent, data);
  }

  confirm(data?:DialogData){
    return this.openDialog('dialog', NgMatConfirmComponent, data);
  }

}
