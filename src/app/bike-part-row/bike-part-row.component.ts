import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { repairs } from 'src/assets/repairs';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-bike-part-row',
  templateUrl: './bike-part-row.component.html',
  styleUrls: ['./bike-part-row.component.css']
})

export class BikePartRowComponent implements OnInit {

  
  isClicked:object=[];

  constructor() {
   }

  ngOnInit() {
  }
 
  @Input() customTitle: string;
  @Input() buttonTitle1: string;
  @Input() buttonTitle2: string;
  @Input() firstInd: string;
  @Input() otherInd: string;
  @Input() filteredArray: object;
@Input() repairList: object;
  @Output() arrayChanged: EventEmitter<object> =   new EventEmitter();
 
//ALSO THE PRINTBUTTON THING DOESN'T WORK???


addRepair = function(id) {
  if(id == "0") {var here="0"; var needed="false"; var btnn=0; var btnn2=1;}
  if(id == "1") {var here="0"; var needed="true"; var btnn=0; var btnn2=1;}

  alert('pls help');
  this.repairList[here].isNeeded = needed;
  this.filteredArray = this.repairList.filter(ind => ind.isNeeded);
  this.isClicked[btnn] = true;
  this.isClicked[btnn2] = false;
  
}

}
