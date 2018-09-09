import { Component } from '@angular/core';
import { repairs } from '../assets/repairs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'newest';
  constructor() {
  }
 repairList: object = [
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
  filteredArray: object = [];

  
//ALSO THE PRINTBUTTON THING DOESN'T WORK???


changeColor(where, color, opposite, ind) {
    document.getElementById(opposite).style.color = "black";
    document.getElementById(where).style.color = color;
}

buttChangeColor(where, newClass, opposite, newClass2) {
    document.getElementById(where).className = "btn " + newClass;
    document.getElementById(opposite).className = "btn " + newClass2;
}

addRepair = function(here, needed) {
    this.repairList[here].isNeeded = needed;
    this.filteredArray = this.repairList.filter(ind => ind.isNeeded);

}

//Illuminate the next row if it's not already been chosen
illuminateRow(button1,button2) {
    document.getElementById(button1).className = "btn btn-primary";
    document.getElementById(button2).className = "btn btn-primary";
}

// NOW FIND SOME WAY TO RECREATE THE CLOCK CAUSE IT DOESNT WORK ANYMORE


}
