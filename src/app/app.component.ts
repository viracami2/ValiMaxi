import { Component } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Usuario } from './subCompoUsuario/Usuario.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


   private readonly uri = 'https://verimaxi.azurewebsites.net/';
 //  private readonly uri = 'http://localhost:52885/';
  private readonly api= 'api/Usuario?id=';


  // dependency injection
  constructor(private _http: HttpClient   ) {
  }

  title = 'app VeriMaxi Version =>0.1!!';
  aempezar = 'a empezar en este mundo loco';
  value = '';
  isDone = true ;
  integer = 123;
  hola:string = 'hola';
  datoString = ' :) ' + this.hola + ' esto es un string suck! ';
  datoStringUno: string = 'jeje hola}';



  saludarCordialmente(): string {
    return 'Hola mundo cruel xd';
  }

  // tslint:disable-next-line:member-ordering
  datxa: Usuario = null;

   eventoLocoUno(): string  {

    this.getUsers().subscribe(data => {console.log(data); this.datxa = data; });
    return this.datxa.first_name ;
  }


  getUsers(): Observable<any> {
    return this._http.get<Usuario>(this.uri + this.api + '1102231921',
                                       httpOptions );
  }

}
