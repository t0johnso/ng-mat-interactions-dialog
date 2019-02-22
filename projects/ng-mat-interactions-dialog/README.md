# NgMatInteractionsDialog

## Description:
Create modal dialogs for Alert, Prompt, and Confirm using Angular Material Dialogs by simply calling the service method ( no need to create your own templates manage styles etc).<br>Use default templates or optionally pass a title, message text, button text, an/or a template reference.
<br>This is an Angular component/service module library requiring an Angular application. This was generated and tested in [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## Get Started:

Requires an existing Angular application or create one:
<pre>ng new my-angular-project</pre>

So, inside your Angular application directory:

<pre>cd /.../my-angular-project</pre>

### install library
use your preferred import method:

NPM:
<pre>npm i --save ng-mat-interactions-dialog</pre>

YARN:
<pre>yarn ng-mat-interactions-dialog</pre>

### install peer dependencies as needed:

#### Angular Material
Aside from core Angular modules for any new angular project ( @angular/core, @angular/common, @angular/forms ), this library has also peer dependencies for Angular Material (https://material.angular.io/guide/getting-started)<br>
Follow get started steps 1-2, 4: install npm modules, import animations module, include a theme.

...from https://material.angular.io/guide/getting-started
1. install angular material
<pre>npm install --save @angular/material @angular/cdk @angular/animations</pre>
2. import browser animations module ( in app module or)
<pre>
...
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
in the test version I use the theme builder with some custom overrides:<br>
projects/ng-mat-tester/src/assets/styles/material/material-theme.scss<br>
projects/ng-mat-tester/src/assets/styles/material/material-overrides.scss<br>
5. Gesture (hammer.js) support is not necessarily required for this library. This project uses Angular Material's MatButton, MatDialog, and MatInput component modules.

in projects/ng-mat-tester/src/styles.scss:
<pre>
@import "~@angular/material/prebuilt-themes/deeppurple-amber.css";
@import "assets/styles/material/material-theme.scss";
</pre>

#### Usage
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
then (same component/service):
alert(), confirm(), and prompt() service methods return an observable for that dialog's close event
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

To use the template feature, pass a template reference from the relevant component: ElementRef;

in component.html:
```
  <ng-template #myAlertContentTemplate>
    <ul>
      <li>Step One</li>
      <li>Step Two</li>
      <li>Step Three</li>
    </ul>
  </ng-template>
```
in component.ts:
<pre>
import {
  ...
  <b>ViewChild</b>,
  <b>ElementRef</b>
} from '@angular/core';
import { DialogData, NgMatInteractionsDialogService } from 'ng-mat-interactions-dialog';
...
@ViewChild('myAlertContentTemplate') alertTemplateRef: ElementRef;
constructor(
  ...
  private ngMatAlertService: NgMatInteractionsDialogService
){}
...
myAlertMethod(){
  this.ngMatAlertService.alert({
    <b>template: this.alertTemplateRef</b>,
    ...
  }).subscribe(result => {
    //whatever you want to do when dialog closes
  })
}
...
</pre>


## Development
The Development repo is available @ https://github.com/t0johnso/ng-mat-interactions-dialog
<pre>git clone https://github.com/t0johnso/ng-mat-interactions-dialog.git</pre>

projects > ng-mat-interactions-dialog is the actual library<br>
projects > ng-mat-tester is a test environment you can use to test locally before repackaging;

### Serve
See a sample app running the build
<pre>ng serve ng-mat-tester</pre>

### Test library
<pre>ng test ng-mat-interactions-dialog</pre>

### Test consumer application:
<pre>ng test ng-mat-tester</pre>

### Build and Serve:
<pre>npm run package</pre>
This will, build the library, packaged as dist/ng-mat-interactions-dialog/ng-mat-interactions-dialog-1.0.0.tgz, and serve the test application (on localhost:4200).

## Test your package
You'll want to serve up a new app and test importing it <br>
Todd Palmer wrote a great article on this for Angular-In-Depth,<br>
Bookmarked that section of the article here:
https://blog.angularindepth.com/creating-a-library-in-angular-6-part-2-6e2bc1e14121#1cb3
