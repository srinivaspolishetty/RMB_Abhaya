import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CityDristict } from "../././../../common/models/citydristict.model";

import { CitydistrictComponent } from "../../../common/components/citydistrict/citydistrict.component";
import { DevicesService } from "../../../common/services/deviceserviceapi";
import { PageModel } from "../../../common/models/page.model";
import { environment } from '.././../../../environments/environment';
import { DatePickerModel } from '../../../common/models/date-picker-model.model';
import { EditviewLocationComponent } from "../../devices/modalpopup/editview-location/editview-location.component";
import { LocationModel } from "../../../common/models/locationmonitoring.model";
import { PaginationModel } from "../../../common/models/pagination.model";
import { ExcelService } from "../../../common/services/downloadexcelservice";
import { DatePipe } from "@angular/common";


@Component({
  selector: 'app-prodtest',
  templateUrl: './prodtest.component.html',
  styleUrls: ['./prodtest.component.sass'],
  providers: [DatePipe]
})
export class ProdtestComponent implements OnInit {
  cityDistrictConfig: CityDristict;
  cityDistrictCompData: any;
  parentFormSubmitted: boolean;
  showFilters: boolean = false;
  locationDetails: Array<LocationModel>;
  searchText: string = '';
  page: PageModel = new PageModel();
  isDataExists: Boolean = false;
  pageSizeValues: Array<number> = environment.pageSizeValues;
  pageSize: Number = environment.pageSize;
  intilPageNumber: Number = 0;
  p: Number;
  datePickerModel: DatePickerModel;
  searchDate: string = '';
  noDataText: string = "No Location Details Available";
  downloadArray: Array<any> = [];;
  downloadText: string = this.searchDate;

  @ViewChild('validateCityDistrict') private CitydistrictComponent: CitydistrictComponent;
  private isCityDistrictValid(formValid: any) {
    this.cityDistrictCompData = formValid;
  }
  constructor(private deviceapi: DevicesService, private modalService: NgbModal,
    private excelService: ExcelService, private datepipe: DatePipe) { }

  ngOnInit() {
    this.searchDate = this.datepipe.transform(new Date(), 'dd-MM-yyyy');
    this.getLocationData();
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  editviewLocation(locationDetail) {
    const modalRef = this.modalService.open(EditviewLocationComponent, {
      size: 'lg', backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.selectedLocationDetails = locationDetail;
  }
  changePageSize() {
    this.getLocationData();
  }
  pageChanged(event) {
    this.p = event;
    this.intilPageNumber = event - 1;
    this.getLocationData();
  }
  refreshPage() {
    this.intilPageNumber = 0;
    this.pageSize = environment.pageSize;
    this.searchDate = '';
    this.searchText = '';
    this.getLocationData();
  }
  applyFilters(parentForm) {
    this.showFilters = !this.showFilters;
    this.getLocationData();
  }

  getLocationData() {
    if (this.searchDate.length > 10) {
      this.searchDate = this.datepipe.transform(this.searchDate, 'dd-MM-yyyy');
    }
    else {
      this.searchDate;
    }
    this.deviceapi.getLocationData(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText)
      .subscribe((_data: PaginationModel) => {
        this.locationDetails = _data.content;
        this.page = _data.page;
        this.isDataExists = (this.locationDetails.length > 0);
      });
  }

  
  downloadExcel() {
    this.downloadText = this.searchDate;
    this.deviceapi.downloadLocation(this.intilPageNumber, this.searchDate, this.searchText)
      .subscribe((_data: PaginationModel) => {
        const locationContent = _data.content;
        for (let index of locationContent) {
          delete index.links;
          const locationAlerts = index.alertsStatusVO[0];
          const merged = { ...index, ...locationAlerts };
          this.downloadArray.push(merged);
        }
        if (this.searchText !== '') {
          this.downloadText = this.searchText + '_' + this.searchDate;
        }
        this.excelService.exportAsExcelFile(this.downloadArray, this.downloadText);
      });
  }

}