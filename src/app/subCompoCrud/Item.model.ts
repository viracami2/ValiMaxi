export class Item {
  
  isDone = true;  
  public id:number ;
  public name: string;



  constructor(id: number  , name: string){
    this.id=id;
    this.name=name;
  }


  getInformation(){
    return '[id: '+this.id +', '+this.name + +']';
    
  }


}
