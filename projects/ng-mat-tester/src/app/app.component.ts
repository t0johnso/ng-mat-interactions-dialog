import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgMatInteractionsDialogService } from 'ng-mat-interactions-dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Material Interactions Dialog';
  @ViewChild('alertTemplate') alertTemplateRef: ElementRef;
  constructor(
    private ngMatAlertService: NgMatInteractionsDialogService,
  ){}

  alert(){
    let options = { title: 'Alert', message: 'This is a test', template: this.alertTemplateRef, alertButton: 'Cool' }
    this.ngMatAlertService.alert(options).subscribe(
      result => console.log('Alert Dialog Closed: ',{result})
    );
  }

  confirm(){
    let options = { title: 'Confirm', message: 'Really though?', cancelButton: 'oh oops JK.', confirmButton: 'Heck Yea!'}//, template: this.alertTemplateRef }
    this.ngMatAlertService.confirm(options).subscribe(
      result => console.log('Confirm Dialog Closed: ',{result})
    );
  }

  prompt(){
    let options = { title: 'Prompt', message: 'What would you like?', cancelButton: 'OH, nevermind.', promptButton: 'DONE'}//, template: this.alertTemplateRef }
    this.ngMatAlertService.prompt(options).subscribe(
      result => console.log('Prompt Dialog Closed: ',{result})
    );
  }

}
