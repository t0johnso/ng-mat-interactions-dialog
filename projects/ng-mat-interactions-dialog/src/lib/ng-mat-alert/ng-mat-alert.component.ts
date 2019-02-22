import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../dialog-data';

@Component({
  selector: 'nmid-ng-mat-alert',
  templateUrl: './ng-mat-alert.component.html',
  styleUrls: ['./ng-mat-alert.component.css']
})
export class NgMatAlertComponent {

  constructor(
    public dialogRef: MatDialogRef<NgMatAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  
}
