import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMatInteractionsDialogModule } from 'ng-mat-interactions-dialog';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgMatInteractionsDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
