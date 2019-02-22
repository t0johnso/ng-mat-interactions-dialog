import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { NgMatInteractionsDialogModule } from 'ng-mat-interactions-dialog';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgMatInteractionsDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
