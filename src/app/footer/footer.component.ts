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
      this.changeABC(value);

    })
  }

  ngOnInit(): void {
  }

  changeABC(value){
    // this.addcolor = value;
    // if (value === 3 ) {
    //   this.addcolor = true;
    // } else  {
    //   this.addcolor = false;
    // }
    this.addcolor = value === 3;
  }
}
