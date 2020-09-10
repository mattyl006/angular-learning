import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './alerts/warning-alert/warning-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent
  ],
    imports: [
        BrowserModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
