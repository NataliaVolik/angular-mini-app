import { Component, OnInit } from '@angular/core';
import {DataServicesService} from "../services/data-services.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
      public eventServicesService : DataServicesService
  ) {

  }

  ngOnInit(): void {
    this.eventServicesService.setValue(1);
  }

  eventClickBtn(number){
    this.eventServicesService.getClickValue.next(number);
  }
}
