import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  title = 'app Angular First!!';
  aempezar ='a empezar en este mundo loco'

  isDone = true;  
  integer = 123;
  hola:string ='hola';
  datoString = ' :) '+this.hola +' esto es un string suck! ';
  datoStringUno:string = 'jeje hola}';



  saludarCordialmente() : string{


    return 'Hola mundo cruel xd'
  }


}
