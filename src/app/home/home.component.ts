import { Component, OnInit } from '@angular/core';
import {DataServicesService} from "../services/data-services.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  configApp : any;
  constructor(public dataService : DataServicesService) {
    this.dataService.configEvent.subscribe((config)=>{
      this.configApp = config;
    })
  }

  ngOnInit(): void {
    console.log(localStorage.getItem('config'));
  }

}
