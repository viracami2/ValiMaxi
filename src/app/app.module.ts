import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';//para animaciones

import {
  MatAutocompleteModule,  MatButtonModule,
  MatButtonToggleModule,  MatCardModule,  MatFormFieldModule,  MatCheckboxModule,
  MatChipsModule,  MatDatepickerModule,  MatDialogModule,  MatExpansionModule,
  MatGridListModule,  MatIconModule,  MatInputModule,  MatListModule,
  MatMenuModule,  MatNativeDateModule,  MatPaginatorModule,  MatProgressBarModule,
  MatProgressSpinnerModule,  MatRadioModule,  MatRippleModule, 
  MatSidenavModule,  MatSliderModule,  MatSlideToggleModule,  MatSnackBarModule,
  MatSortModule,  MatTableModule,  MatTabsModule,  MatToolbarModule,
  MatTooltipModule,  MatStepperModule 
} from '@angular/material';

import {MatSelectModule} from '@angular/material';



import { AppComponent } from './app.component';
import { AppCompoBasic } from './compoBasic/app.compoBasic';
import { AppcompoCheckNumber } from './subCompoValidaNumero/app.compoCheckNumber';
import { AppsubCompoCrud } from './subCompoCrud/app.subCompoCrud';
import { AppCompoUsuario } from './subCompoUsuario/app.subCompoUsuario';


import { HttpModule }    from '@angular/http';//para hacer llamados a una api



@NgModule({
  declarations: [
    AppComponent,AppCompoBasic,AppcompoCheckNumber,
    AppsubCompoCrud,AppCompoUsuario
  ],
  imports: [
    BrowserModule,FormsModule,BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatInputModule,
    HttpModule,MatIconModule,MatSelectModule

  ],  
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
