import { Component, Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Usuario } from '../subCompoUsuario/Usuario.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};


@Injectable()
export class AppCallApis {


   private readonly uri = 'https://verimaxi.azurewebsites.net/';
 //  private readonly uri = 'http://localhost:52885/';
  private readonly api= 'api/Usuario';


  // dependency injection
  constructor(private _http: HttpClient) {
  }
  getUser(dato = '1102231921'): Observable<Usuario> {
    return this._http.get<Usuario>(this.uri + this.api + '?id=' + dato,
                                       httpOptions );
  }

  getUsers(): Observable<any> {
    return this._http.get<any>(this.uri + this.api,
                                       httpOptions );
  }

}
