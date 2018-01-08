export class Usuario {

  idUser: string = undefined;
  identityType: string = undefined;
  identityNumber: number = undefined;
  epsCode: number;
  userType: string;
  firstName: string;
  secondName: string;
  lastNameFirst: string;
  lastNameSecond: string;
  birthDate: string;
  age: number;
  unitAge:number;
  sex:string;
  codeTown:number;
  codeDepartament:number;
  residentialArea:string;

  constructor(
  idUser: string ,  identityType: string,  identityNumber: number ,
  epsCode: number,  userType: string,  firstName: string,
  secondName: string,  lastNameFirst: string,  lastNameSecond: string,
  birthDate: string,  age: number,  unitAge:number,  sex:string,
  codeTown:number, codeDepartament:number, residentialArea:string,
  ){
    this.idUser=idUser;
    this.identityType=identityType;
    this.identityNumber=identityNumber;
    this.epsCode=epsCode;
    this.userType=userType;
    this.firstName=firstName;
    this.secondName=secondName;
    this.lastNameFirst=lastNameFirst;
    this.lastNameSecond=lastNameSecond;
    this.birthDate=birthDate;
    this.age=age;
    this.unitAge=unitAge;
    this.sex=sex;
    this.codeTown=codeTown;
    this.codeDepartament=codeDepartament;
    this.residentialArea=residentialArea;
    this.idUser=idUser;
    

  }

  // constructor(id: number, name: string) {
  //   this.id = id:
    
  // }


  getInformation() {
    return '[id: ' + this.idUser + ', ' + this.firstName + +']';

  }


}
