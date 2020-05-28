import {Component, OnInit, Input} from '@angular/core';
import {DataServicesService} from "../services/data-services.service";


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
   addcolor : boolean;

  @Input () config : any;
  constructor(public dataServicesService : DataServicesService) {


    this.dataServicesService.changeColorClick.subscribe((value)=>{
      this.addcolor = value;
    })
  }

  ngOnInit(): void {
  }

  // changeColor(value){
  //   this.addcolor = true;
  //
  // }

}
