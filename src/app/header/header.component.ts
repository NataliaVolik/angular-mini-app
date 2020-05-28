import {Component, OnInit, Input} from '@angular/core';
import {DataServicesService} from "../services/data-services.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() config : any;
  addname = true;
  constructor(
      public dataServicesService : DataServicesService
  ) {

  }
  ngOnInit(): void {
    this.dataServicesService.setValue(1);
  }

  eventClickBtn(number){
    this.dataServicesService.getClickValue.next(number);
  }
  addColor(){
    this.addname = true;
  }
  removeColor(){
    this.addname = false;
  }

  colorAdd(){
    this.dataServicesService.changeColorClick.next(2);
  }
  colorRemove(){
    this.dataServicesService.changeColorClick.next(3);
  }
}
