import { Component,EventEmitter,Input,Output } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

import {Usuario } from './Usuario.model';
  
@Component({
  selector: 'app-compoUsuario',
  templateUrl: './app.subcompoUsuario.html',
  //styleUrls: ['./compoBasic/app.compoBasic.css']

})
export class AppcompoUsuario implements OnInit {

  value = ' Valioso con un cambio';
    
  items: Array<Usuario> = new Array<Usuario>();
  itemC : Usuario = new Usuario(undefined,undefined,undefined,undefined,undefined,undefined
    ,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined);
  
  ngOnInit(): void {
  
    // this.items.push(new Item(1,'victor castro'));
    // this.items.push(new Item(2,'ines castro'));
    // this.items.push(new Item(3,'raul castro'));
  }

addItem(){
this.items.push(this.itemC);
//this.itemC= new Usuario(;
}

  removeItem(it: Usuario){
    const index = this.items.indexOf(it);

    this.items.splice(index,1);

  }
}
