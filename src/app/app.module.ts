import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EdhAngularTableComponent } from './edh-angular-table/edh-angular-table.component';

@NgModule({
  declarations: [
    AppComponent,
    EdhAngularTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
