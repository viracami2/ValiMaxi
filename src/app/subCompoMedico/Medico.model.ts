export class Medico {

  Id: string = undefined;
  Name: string; 
  LastName: string;
  BirthDate: string;


  constructor(
  id: string ,  name: string,lastName: string, 
  birthDate: string
  ) {
    this.Id = id; 
    this.Name = name; 
    this.BirthDate = birthDate;  
    this.LastName = lastName;
  }



  getInformation() {
    return '[id: ' + this.Id + ', ' + this.Name + +']';

  }


}
