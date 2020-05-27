import { Component, OnInit } from '@angular/core';
import {DataServicesService} from "../services/data-services.service";
import {ThemePalette} from "@angular/material/core";


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})


export class ContentComponent implements OnInit {
  firstContent: boolean = false;
  secondContent: boolean = false;
  thirdContent: boolean = false;
  fourContent: boolean = false;
  fiveContent: boolean = false;
  myText: any;

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;


  constructor(public dataServicesService : DataServicesService, public eventServicesService : DataServicesService) {  // инжектет дата сервис (шаг 2)
    this.dataServicesService.getClickValue.subscribe((value)=>{
      this.changeContent(value)
    });


    this.dataServicesService.moveEvent.subscribe((newText)=>{ // получаю данные при помощи подписки (шаг 4)
      this.myText = newText;
    });

    this.eventServicesService.getClickValue.subscribe((value)=>{
      this.changeContent(value)
    })

  }

  ngOnInit(): void {

  }

  changeContent(value){
    this.firstContent = false;
    this.secondContent = false;
    this.thirdContent = false;
    this.fourContent = false;
    this.fiveContent = false;


    switch (value){
      case 1: this.firstContent = true;
        break;
      case 2: this.secondContent = true;
        break;
      case 3: this.thirdContent = true;
        break;
      case 4: this.fourContent = true;
        break;
      case 5: this.fiveContent = true;
        break;
    }
  }

  getMyData(){
    const a = this.dataServicesService.getValue();
    alert(a);
    this.dataServicesService.setValue(a + 1);
  }


}
