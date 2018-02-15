import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { Usuario } from './Usuario.model';
import { AppCallApis } from '../CallApis/app.CallApis';

@Component({
   selector: 'app-compoUsuario',
  templateUrl: './app.subCompoUsuario.html',
  // styleUrls: ['./compoBasic/app.compoBasic.css']

})

export class UsuarioComponent  {



  constructor(private _callApi: AppCallApis ) {
  }

  value = ' Valioso con un cambio';

  items: Array<Usuario> = new Array<Usuario>();
  itemC: Usuario = new Usuario(undefined, undefined, undefined, undefined, undefined, undefined
    , undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);


addItem() {
this.items.push(this.itemC);
// this.itemC= new Usuario(;
}

  removeItem(it: Usuario) {
    const index = this.items.indexOf(it);

    this.items.splice(index, 1);

  }


  eventoLocoUno(): string  {

       this._callApi.getUsers().subscribe(data => {console.log(data['items']); this.items = data['items']; this.items.push(); });
    return this.itemC.first_name;
  }
}
