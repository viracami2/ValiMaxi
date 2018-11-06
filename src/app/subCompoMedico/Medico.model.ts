export class Medico {

  id: string = undefined;
  name: string; 
  lastname: string;
  birthDate: Date;
  medictype:string;
  specialty:string;


  constructor(
  id: string ,  name: string,lastname: string, 
  birthDate: Date,medictype:string ,specialty:string
  ) {
    this.id = id; 
    this.name = name; 
    this.birthDate = birthDate;  
    this.lastname = lastname;
    this.medictype=medictype;
    this.specialty=specialty;
  }



  getInformation() {
    return '[id: ' + this.id + ', ' + this.name + +']';

  }


}
