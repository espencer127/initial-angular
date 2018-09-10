import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bike-part-row',
  templateUrl: './bike-part-row.component.html',
  styleUrls: ['./bike-part-row.component.css']
})
export class BikePartRowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() customTitle: string;
  @Input() buttonTitle1: string;
  @Input() buttonTitle2: string;
  @Input() startIndex: number;
  @Input() func2: string;

//ALSO THE PRINTBUTTON THING DOESN'T WORK???

addRepair = function(here, needed,btnn) {
  this.repairList[here].isNeeded = needed;
  this.filteredArray = this.repairList.filter(ind => ind.isNeeded);
  this.isClicked[btnn] = true;
  var nextone = btnn+1;
  if ((btnn/2) != Math.floor(btnn/2)) {this.isClicked[btnn-1] = false;}
  else if ((btnn/2) == Math.floor(btnn/2)) {this.isClicked[nextone] = false;}
  
}

}
