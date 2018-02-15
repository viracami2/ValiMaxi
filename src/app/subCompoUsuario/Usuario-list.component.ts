import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

import {Usuario } from './Usuario.model';
import { AppCallApis } from '../CallApis/app.CallApis';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { isIdentifier } from '@angular/compiler';

@Component({
  templateUrl: './app.subCompoListarUsuario.html',
//   styleUrls: ['./app.UsuarioComponent.css']

})


export class UsuarioListarComponent  {
  selection: SelectionModel<Usuario>;
  displayedColumns: string[];
  dataSource: any;

 constructor(private _callApi: AppCallApis ) {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  value = ' Valioso con un cambio';

  items: Array<Usuario> = new Array<Usuario>();
  itemC: Usuario = new Usuario(undefined, undefined, undefined, undefined, undefined, undefined
    , undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);




    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }

    applyListar() {
      this.eventoLocoUno();
      console.log('=================');
       console.log(this.items);
      this.displayedColumns = ['select', 'Identificacion', 'nombre', 'Apellido', 'edad'];
      this.dataSource = new MatTableDataSource<Usuario>(this.items);
      this.selection = new SelectionModel<Usuario>(true, []);

    }

    eventoLocoUno(): string  {

     this._callApi.getUsers().subscribe(data => {
       // console.log(data['items']);
      this.items = data['items'];
      console.log(this.items);

      this.items.push(); });
   return this.itemC.first_name;
 }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      this.isAllSelected() ?
          this.selection.clear() :
          this.dataSource.data.forEach(row => this.selection.select(row));
    }
  }

  export interface Element {
    Identificacion: number;
    nombre: string;
    Apellido: number;
    edad: string;
  }


  const ELEMENT_DATA: Element[] = [
    // {Identificacion: 1 , nombre : 'Hydrogen', Apellido: 1.0079, edad: 'H'},
    // {Identificacion: 2 , nombre : 'Helium', Apellido: 4.0026, edad: 'He'},
    // {Identificacion: 3 , nombre : 'Lithium', Apellido: 6.941, edad: 'Li'},
    // {Identificacion: 4 , nombre : 'Beryllium', Apellido: 9.0122, edad: 'Be'},
    // {Identificacion: 5, nombre : 'Boron', Apellido: 10.811, edad: 'B'},
    // {Identificacion: 6, nombre : 'Carbon', Apellido: 12.0107, edad: 'C'},
    // {Identificacion: 7, nombre: 'Nitrogen', Apellido: 14.0067, edad: 'N'},
    // {Identificacion: 8, nombre: 'Oxygen', Apellido: 15.9994, edad: 'O'},
    // {Identificacion: 9, nombre: 'Fluorine', Apellido: 18.9984, edad: 'F'},
    // {Identificacion: 10, nombre: 'Neon', Apellido: 20.1797, edad: 'Ne'},
    // {Identificacion: 11, nombre: 'Sodium', Apellido: 22.9897, edad: 'Na'},
    // {Identificacion: 12, nombre: 'Magnesium', Apellido: 24.305, edad: 'Mg'},
    // {Identificacion: 13, nombre: 'Aluminum', Apellido: 26.9815, edad: 'Al'},
    // {Identificacion: 14, nombre: 'Silicon', Apellido: 28.0855, edad: 'Si'},
    // {Identificacion: 15, nombre: 'Phosphorus', Apellido: 30.9738, edad: 'P'},
    // {Identificacion: 16, nombre: 'Sulfur', Apellido: 32.065, edad: 'S'},
    // {Identificacion: 17, nombre: 'Chlorine', Apellido: 35.453, edad: 'Cl'},
    // {Identificacion: 18, nombre: 'Argon', Apellido: 39.948, edad: 'Ar'},
    // {Identificacion: 19 , nombre: 'Potassium', Apellido: 39.0983, edad: 'K'},
     {Identificacion: 20 , nombre: 'Calcium', Apellido: 40.078, edad: 'Ca'},
  ];
