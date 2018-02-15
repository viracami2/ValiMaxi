export class Usuario {

  idUser: string = undefined;
  identityType: string = undefined;
  id_number: number = undefined;
  epsCode: number;
  userType: string;
  first_name: string;
  secondName: string;
  lastNameFirst: string;
  lastNameSecond: string;
  birthDate: string;
  age: number;
  unitAge: number;
  sex: string;
  codeTown: number;
  codeDepartament: number;
  residentialArea: string;

  constructor(
  idUser: string ,  identityType: string,  id_number: number ,
  epsCode: number,  userType: string,  firstName: string,
  secondName: string,  lastNameFirst: string,  lastNameSecond: string,
  birthDate: string,  age: number,  unitAge: number,  sex: string,
  codeTown: number, codeDepartament: number, residentialArea: string,
  ) {
    this.idUser = idUser;
    this.identityType = identityType;
    this.id_number = id_number;
    this.epsCode = epsCode;
    this.userType = userType;
    this.first_name = firstName;
    this.secondName = secondName;
    this.lastNameFirst = lastNameFirst;
    this.lastNameSecond = lastNameSecond;
    this.birthDate = birthDate;
    this.age = age;
    this.unitAge = unitAge;
    this.sex = sex;
    this.codeTown = codeTown;
    this.codeDepartament = codeDepartament;
    this.residentialArea = residentialArea;
    this.idUser = idUser;


  }

  // constructor(id: number, name: string) {
  //   this.id = id:

  // }


  getInformation() {
    return '[id: ' + this.idUser + ', ' + this.first_name + +']';

  }


}
