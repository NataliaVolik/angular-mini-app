import { Component, OnInit } from '@angular/core';
import {DataServicesService} from "../services/data-services.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  value = JSON.parse(localStorage.getItem('config'));
  configApp : any;
  constructor(public dataService : DataServicesService) {
    this.dataService.configEvent.subscribe((config)=>{
      this.configApp = config;
    });
    console.log(this.value);
  }

  ngOnInit(): void {

  }

}
