import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppComponent } from './app.component';
import { AppCompoBasic } from './compoBasic/app.compoBasic';


@NgModule({
  declarations: [
    AppComponent,AppCompoBasic
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
