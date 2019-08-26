import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CityDristict } from "././../../common/models/citydristict.model";

import { CitydistrictComponent } from "../../common/components/citydistrict/citydistrict.component";
import { DevicesService } from "../../common/services/deviceserviceapi";
import { PageModel } from "../../common/models/page.model";
import { environment } from './../../../environments/environment';
import { DatePickerModel } from '../../common/models/date-picker-model.model';
import { EditviewdevicesComponent } from "./modalpopup/editviewdevices/editviewdevices.component";

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.sass']
})
export class DevicesComponent implements OnInit {
  cityDistrictConfig: CityDristict;
  cityDistrictCompData: any;
  parentFormSubmitted: boolean;
  showFilters: boolean = false;
  deviceData; //Need to create the model
  searchText: string = '';
  page: PageModel = new PageModel();
  isDataExists: Boolean = false;
  pageSizeValues: Array<number> = environment.pageSizeValues;
  pageSize: Number = environment.pageSize;
  intilPageNumber: Number = 0;
  p: Number;
  datePickerModel: DatePickerModel;
  searchDate: string = '';
  districtId: string = '';
  cityId: string = '';
  rtoId: string = '';
  noDataText: string = 'No Device Details Available';
  @ViewChild('validateCityDistrict') private CitydistrictComponent: CitydistrictComponent;
  private isCityDistrictValid(formValid: any) {
    this.cityDistrictCompData = formValid;
  }
  constructor(private deviceapi: DevicesService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getAllDevices();
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  editviewdevices(deviceDetails, eventType) {
    deviceDetails.selectedEvent = eventType;
    const modalRef = this.modalService.open(EditviewdevicesComponent, {
      size: 'lg', backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.selectedDeviceDetails = deviceDetails;
    modalRef.result.then((result) => {
      if (result === 'refreshContent') {
        this.intilPageNumber = 0;
        this.getAllDevices();
        this.p = 1;

      }
    })
  }
  changePageSize() {
    this.getAllDevices();
  }
  pageChanged(event) {
    this.p = event;
    this.intilPageNumber = event - 1;
    this.getAllDevices();
  }

  applyFilters(parentForm) {
    this.parentFormSubmitted = true;
    this.CitydistrictComponent.validateChildForm(this.parentFormSubmitted);
    if (!parentForm.valid || !this.cityDistrictCompData.isFormValid) {
      return;
    }
    else {
      this.districtId = this.cityDistrictCompData.districtName;
      this.cityId = this.cityDistrictCompData.cityName;
      this.rtoId = this.cityDistrictCompData.rtoOfficeName;
      this.showFilters = false;
      this.getAllDevices();
    }

  }
  refreshPage(){
    this.intilPageNumber = 0;
    this.pageSize = environment.pageSize;
    this.searchDate = '';
    this.searchText = '';
    this.districtId = '';
    this.cityId = '';
    this.getAllDevices();
  }
  getAllDevices() {
    this.deviceapi.getAllDevices(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText, this.districtId, this.cityId, this.rtoId)
      .subscribe((_data: any) => {
        this.deviceData = _data.content;
        this.page = _data.page;
        this.isDataExists = (this.deviceData.length > 0);
      });
  }

}