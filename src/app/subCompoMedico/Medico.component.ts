import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { Medico } from './Medico.model';
import { AppCallApis } from '../CallApis/app.CallApis';

export interface Food {
  value: string;
  viewValue: string;
}


@Component({
   selector: 'app-compoMedico',
  templateUrl: './app.subCompoMedico.html',
   styleUrls: ['./app.subCompoMedico.css']

})




export class MedicoComponent  {

  selectedProcedimiento = '';
  selectedValue ='';
  foods: Food[] = [
    {viewValue: 'Cita Medica', value: 'cita'},
    {viewValue: 'Examen Clinico', value: 'examen'},
  ];

  procedimientos: Food[] = [
   
   ];


  constructor(private _callApi: AppCallApis ) {
  }

  value = ' Valioso con un cambio';

  items: Array<Medico> = new Array<Medico>();
  itemC: Medico = new Medico(undefined, undefined, undefined, undefined);


    
  onBlur(){
    this.procedimientos.splice(0,this.procedimientos.length);
 //   console.log('=========llego==');
    var data = this.selectedProcedimiento;

    if(data =='cita'){
    this.procedimientos.push({viewValue: 'General',      value: 'general'});
    this.procedimientos.push({viewValue: 'Especialista', value: 'especialista'});
    }
    else{
      this.procedimientos.push({viewValue: 'Orina ',      value: 'orina'});
      this.procedimientos.push({viewValue: 'Sangre', value: 'sangre'});
        }
this.selectedValue =data;
  }


addItem() {
//this.items.push(this.itemC);
// this.itemC= new Usuario(;
}

  removeItem(it: Medico) {
    const index = this.items.indexOf(it);

    this.items.splice(index, 1);

  }


  eventoLocoUno(): string  {

       this._callApi.getUsers().subscribe(data => {console.log(data['items']); this.items = data['items']; this.items.push(); });
    return this.itemC.getInformation();
  }
}
