import { Component, OnInit } from '@angular/core';
import { deviceDetailsModel } from '../../../common/models/device-details-model';
import { environment } from '../../../../environments/environment';
import { PageModel } from "../../../common/models/page.model";

@Component({
  selector: 'app-devicereport',
  templateUrl: './devicereport.component.html',
  styleUrls: ['./devicereport.component.sass']
})
export class DevicereportComponent implements OnInit {

  constructor() { }
  driverDetails : Array<deviceDetailsModel> = []; //driversModel;
  pageSizeValues = [10, 50, 100, 200];
  pageSize: Number = environment.pageSize;
  intilPageNumber: Number = 0;
  isDataExists: Boolean = false;
  page: PageModel = new PageModel();
  searchDate: string;
  searchText: string = '';
  p: Number;

  ngOnInit() {
    this.getDriverDetails();
  }

  getDriverDetails() {
    
  }

  changePageSize() {
    this.getDriverDetails();
  }
  pageChanged(event) {
    this.p = event;
    this.intilPageNumber = event - 1;
    this.getDriverDetails();
  }

}
