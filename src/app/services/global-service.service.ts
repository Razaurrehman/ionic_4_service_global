import { Injectable } from '@angular/core';

@Injectable()
export class GlobalServiceService {

  constructor() { }


  public abc(){
    return {
      name: 'raza',
      age: 28,
      sex: 'male'
    }
  }
}
