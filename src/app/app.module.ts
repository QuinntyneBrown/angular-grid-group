import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollapsibleHeaderComponent } from './collapsible-header.component';
import { GridGroupComponent } from './grid-group.component';

@NgModule({
  declarations: [
    AppComponent,
    CollapsibleHeaderComponent,
    GridGroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
