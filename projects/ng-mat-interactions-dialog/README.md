# NgMatInteractionsDialog

##Description:
Create modal dialogs for Alert, Prompt, and Confirm using Angular Material Dialogs.
, use default templates or optionally pass title, message text or template, button text, or
This is an Angular component/service module library requiring an Angular application. This was generated and tested in [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

##Get Started:

Requires an existing Angular application,
After creating Angular project,
<pre>ng new my-angular-project</pre>

 inside your Angular application directory:

<pre>cd /.../my-angular-project</pre>

###install library
use preferred import:

NPM:
<pre>npm i --save ng-mat-interactions-dialog</pre>

YARN:
<pre>yarn ng-mat-interactions-dialog</pre>

###install peer dependencies as needed:

####Angular Material
Aside from core angular modules for any new angular project ( @angular/core, @angular/common, @angular/forms ), this library has also peer dependencies for Angular Material (https://material.angular.io/guide/getting-started)
Follow get started steps 1-2, 4: install npm modules, import animations module, include a theme.

Gesture (hammer.js) support is not necessarily required for this library. This project uses Angular Material's MatButton, MatDialog, and MatInput component modules.
...from https://material.angular.io/guide/getting-started
1. install angular material
<pre>npm install --save @angular/material @angular/cdk @angular/animations</pre>
2. import browser animations module ( in app module or)
<pre>
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})
export class PizzaPartyAppModule { }
</pre>

3. the library imports the material component modules it needs already, as long as you have them installed
4. import a theme example:
<pre>@import "~@angular/material/prebuilt-themes/indigo-pink.css";</pre>
in the test version I use the theme builder with some custom overrides:
projects/ng-mat-tester/src/assets/styles/material/material-theme.scss
projects/ng-mat-tester/src/assets/styles/material/material-overrides.scss

in projects/ng-mat-tester/src/styles.scss:
<pre>
@import "~@angular/material/prebuilt-themes/deeppurple-amber.css";
@import "assets/styles/material/material-theme.scss";
</pre>

####Usage
Parent Module:
<pre>
...
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMatInteractionsDialogModule} from 'ng-mat-interactions-dialog';
...
imports: [
...
  NgMatInteractionsDialogModule,
  BrowserAnimationsModule
...
],
</pre>

Component or Service:
<pre>
import { DialogData, NgMatInteractionsDialogService } from 'ng-mat-interactions-dialog';
...
constructor(
  private ngMatAlertService: NgMatInteractionsDialogService,
){}
...
</pre>
then:
<pre>
  this.ngMatAlertService.alert(options).subscribe(result => {
    //result is undefined
  });
</pre>
or  
<pre>
  this.ngMatAlertService.confirm(options).subscribe(result => {
    //result is true | false | undefined;
  });
</pre>
or
<pre>
  this.ngMatAlertService.prompt(options).subscribe(result => {
    //result is input value or undefined
  });
</pre>

options:
DialogData
<pre>
{
  title?: string; //mat-dialog-title text
  message?: string; //mat-dialog-content text
  template?: ElementRef //template passed to modal, placed below any message string
  cancelButton?: string; //default 'Cancel' used for confirm and prompt cancel button
  alertButton?: string; //default 'OK' used for alert 'OK' button
  confirmButton?: string; // default 'OK' used for confirm true button
  promptButton?: string; //default 'OK' used for prompt send button
}
</pre>

alert(), confirm(), and prompt() methods return an observable for the close event.
to subscribe

## Development
The Development repo is available @ https://github.com/t0johnso/ng-mat-interactions-dialog
<pre>git clone https://github.com/t0johnso/ng-mat-interactions-dialog.git</pre>

projects > ng-mat-interactions-dialog is the actual library
projects > ng-mat-tester is a test environment you can use to test locally before repackaging;

###Serve
See a sample app running the build
<pre>ng serve ng-mat-tester</pre>

###Test library
<pre>ng test ng-mat-interactions-dialog</pre>

###Test application:
<pre>ng test ng-mat-tester</pre>

###Build and Serve:
<pre>npm run package</pre>
This will, build the library, packaged as dist/ng-mat-interactions-dialog/ng-mat-interactions-dialog-1.0.0.tgz, and serve the test application (on localhost:4200).
