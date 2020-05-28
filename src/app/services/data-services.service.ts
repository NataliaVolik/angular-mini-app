import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {
  value : any;

  getClickValue = new Subject();

  moveEvent = new Subject(); // создаю событие в сервисе

  changeColorClick = new Subject();

  configEvent = new Subject();

  constructor() { }

  getValue(){
    return this.value;
  }
  setValue(newValue){
    this.value = newValue;

  }
}
