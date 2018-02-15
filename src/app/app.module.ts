import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; // para animaciones
import {Routes, RouterModule} from '@angular/router';



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
import { UsuarioListarComponent } from './subCompoUsuario/Usuario-list.component';
import { UsuarioComponent } from './subCompoUsuario/Usuario.Component';


// obsoleta
// import { HttpModule } from '@angular/http';//para hacer llamados a una api

import { HttpClientModule } from '@angular/common/http'; // para hacer llamados a una api
import { AppCallApis } from './CallApis/app.CallApis';


const appRoutes: Routes = [
  {path : 'compocheck', component: AppcompoCheckNumber},
  {path : 'crearUsuario', component: UsuarioComponent}  ,
   {path : 'listarUsuario', component: UsuarioListarComponent}  ,
  {path : 'chekearNumero', component: AppcompoCheckNumber}
 ];


@NgModule({
  declarations: [
    AppComponent, AppCompoBasic, AppcompoCheckNumber,
    AppsubCompoCrud, UsuarioComponent, UsuarioListarComponent
  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
    MatIconModule, MatSelectModule, MatMenuModule, HttpClientModule, MatTableModule,
    RouterModule.forRoot(appRoutes),

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
  providers: [AppCallApis],
  bootstrap: [AppComponent]
})
export class AppModule { }
