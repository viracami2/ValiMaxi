import { Component } from '@angular/core';
  
@Component({
  selector: 'app-basic',
  templateUrl: './app.compoBasic.html',
  //styleUrls: ['./compoBasic/app.compoBasic.css']

})
export class AppCompoBasic {
  
  
  title = 'app Angular First!!';
  aempezar ='a empezar en este mundo loco'

  isDone = true;  
  integer = 123;
  compo:string ='componente numero 2';     

  eventoLocoUno(title:string){
    this.compo=title;

  }


}
