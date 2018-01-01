import { Component } from '@angular/core';


import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  
  constructor(private _http: Http) {
    
  }
  
  
  title = 'app Angular First!!';
  aempezar ='a empezar en este mundo loco'
  value ="";
  isDone = true;  
  integer = 123;
  hola:string ='hola';
  datoString = ' :) '+this.hola +' esto es un string suck! ';
  datoStringUno:string = 'jeje hola}';



  saludarCordialmente() : string{


    return 'Hola mundo cruel xd'
  }


  data: any = null;

   eventoLocoUno() {
    this.aempezar=String( this._http.get('https://apifestigaita.herokuapp.com/api/v1/bagpipes/14')
                .map((res: Response) => res.json())
                 .subscribe(data => {
                        this.data = data;
                        console.log(this.data);
                        
                }));
  }

  

}
