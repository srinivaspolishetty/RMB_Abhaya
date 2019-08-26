import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nodata',
  templateUrl: './nodata.component.html',
  styleUrls: ['./nodata.component.sass']
})
export class NodataComponent implements OnInit {

  @Input() noDataText : string;
  constructor() { }

  ngOnInit() {
  }

}
