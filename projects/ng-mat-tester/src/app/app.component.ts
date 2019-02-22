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

  basicAlert(){
    return this.ngMatAlertService.alert();
  }

  basicConfirm(){
    return this.ngMatAlertService.confirm();
  }

  basicPrompt(){
    return this.ngMatAlertService.prompt();
  }

  alert(){
    let options = { title: 'Alert', message: 'This is a test', template: this.alertTemplateRef, alertButton: 'Cool' }
    return this.ngMatAlertService.alert(options);
  }

  confirm(){
    let options = { title: 'Confirm', message: 'Really though?', cancelButton: 'oh oops JK.', confirmButton: 'Heck Yea!'}//, template: this.alertTemplateRef }
    return this.ngMatAlertService.confirm(options);
  }

  prompt(){
    let options = { title: 'Prompt', message: 'What would you like?', cancelButton: 'OH, nevermind.', promptButton: 'DONE'}//, template: this.alertTemplateRef }
    return this.ngMatAlertService.prompt(options);
  }

}
