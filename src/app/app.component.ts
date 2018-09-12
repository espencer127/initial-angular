import { Component, NgModuleFactoryLoader, Input, Output, OnInit } from '@angular/core';
import { repairs } from 'src/assets/repairs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'newest';
  constructor() {
  }

  repairList:object = [
    new repairs("Front wheel", "out of true",false),
    new repairs("Front hub", "needs tightening", false),
    new repairs("Front brake","needs repair", false),
    new repairs("Headset","needs tightening", false),
    new repairs("Bottom bracket","needs tightening", false),
    new repairs("Rear wheel", "out of true", false),
    new repairs("Rear hub", "needs tightening", false),
    new repairs("Rear brake", "needs repair", false),
    new repairs("Front shifting", "needs repair", false),
    new repairs("Rear shifting", "needs repair", false),
    new repairs("Front tire", "needs replacing", false),
    new repairs("Front tube", "needs replacing", false),
    new repairs("Pedals", "not present/need replaing", false)
  ];
  
filteredArray:object=[];

// NOW FIND SOME WAY TO RECREATE THE CLOCK CAUSE IT DOESNT WORK ANYMORE




  arrayChangedHandler(filteredArray: object) {
    this.filteredArray = filteredArray;
    console.log(filteredArray);
  }
  

}
