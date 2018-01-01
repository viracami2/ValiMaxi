import { Component,EventEmitter,Input,Output } from '@angular/core';
  
@Component({
  selector: 'app-validandoNumero',
  templateUrl: './app.compoCheckNumber.html',
  //styleUrls: ['./compoBasic/app.compoBasic.css']

})
export class AppCompoCheckNumber {
  
  
  @Input()  maximo: number ;
  @Input()  minimo: number;
  @Input()  value: number ;
  
  @Output() valueOut = new EventEmitter<string>();
  notError = false
  
  onBlur(){
    //this.notError = !(  this.value >= this.minimo && this.value <= this.maximo);
    this.notError = this.value >=this.minimo && this.value <= this.maximo;

    if(this.notError){
    this.valueOut.emit( this.value.toString());    
    }
    //else{

      //this.valueOut.emit( "Numero ERRADO");
    //    }



  }
  

  isDone = true;  
  integer = 123;
  compo:string ='componente numero 2';     

  eventoLocoUno(title:string){
    this.compo=title;

  }


}
