import { Component, OnInit } from '@angular/core';
import {DataServicesService} from "../services/data-services.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    public dataServicesService : DataServicesService // инжектет дата сервис (шаг 2)
  ) {

  }
  ngOnInit(): void {
    this.dataServicesService.setValue(1);
  }
  eventFirstContent(myNumber){
    this.dataServicesService.getClickValue.next(myNumber);
  }

  eventNewContent(myText){
    this.dataServicesService.moveEvent.next(myText); // посылаю из компонента с помощью next() значение (шаг 3)
  }
}
