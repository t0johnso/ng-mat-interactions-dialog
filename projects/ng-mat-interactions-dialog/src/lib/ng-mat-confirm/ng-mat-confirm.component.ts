import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../dialog-data';

@Component({
  selector: 'nmid-ng-mat-confirm',
  templateUrl: './ng-mat-confirm.component.html',
  styleUrls: ['./ng-mat-confirm.component.css']
})
export class NgMatConfirmComponent {

  constructor(
    public dialogRef: MatDialogRef<NgMatConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

}
