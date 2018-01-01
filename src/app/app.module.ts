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
import { AppCompoCheckNumber } from './subCompoValidaNumero/app.CompoCheckNumber';

import { HttpModule }    from '@angular/http';//para hacer llamados a una api


@NgModule({
  declarations: [
    AppComponent,AppCompoBasic,AppCompoCheckNumber
  ],
  imports: [
    BrowserModule,FormsModule,BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatInputModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
