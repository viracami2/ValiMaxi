import { Component,EventEmitter,Input,Output } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { Item } from './Item.model';
  
@Component({
  selector: 'app-crudBasic',
  templateUrl: './app.subCompoCrud.html',
  //styleUrls: ['./compoBasic/app.compoBasic.css']

})
export class AppsubCompoCrud implements OnInit {

  value = ' Valioso con un cambio';
    
  items: Array<Item> = new Array<Item>();
  
  ngOnInit(): void {
  
    this.items.push(new Item(1,'victor castro'));
    this.items.push(new Item(2,'ines castro'));
    this.items.push(new Item(3,'raul castro'));
  }



  removeItem(it: Item){
    const index = this.items.indexOf(it);

    this.items.splice(index,1);

  }
}
