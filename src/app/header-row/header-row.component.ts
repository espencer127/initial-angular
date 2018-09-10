import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-header-row',
  templateUrl: './header-row.component.html',
  styleUrls: ['./header-row.component.css']
})
export class HeaderRowComponent implements OnInit {

  @Input() customTitle: string;
    
  constructor() { }

  ngOnInit() {
  }

}
