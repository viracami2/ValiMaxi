import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';//para animaciones
import {MatButtonModule, MatCheckboxModule,
        MatFormFieldModule,MatInputModule

} from '@angular/material';

import { AppComponent } from './app.component';
import { AppCompoBasic } from './compoBasic/app.compoBasic';




@NgModule({
  declarations: [
    AppComponent,AppCompoBasic
  ],
  imports: [
    BrowserModule,FormsModule,BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
