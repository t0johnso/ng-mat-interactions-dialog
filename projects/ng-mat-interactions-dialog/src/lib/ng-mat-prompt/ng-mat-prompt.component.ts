import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../dialog-data';

@Component({
  selector: 'nmid-ng-mat-prompt',
  templateUrl: './ng-mat-prompt.component.html',
  styleUrls: ['./ng-mat-prompt.component.css']
})
export class NgMatPromptComponent {
    result;
    constructor(
      public dialogRef: MatDialogRef<NgMatPromptComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }
  }
