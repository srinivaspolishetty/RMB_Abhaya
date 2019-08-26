import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CityDristict } from "../././../../common/models/citydristict.model";

import { CitydistrictComponent } from "../../../common/components/citydistrict/citydistrict.component";
import { DevicesService } from "../../../common/services/deviceserviceapi";
import { PageModel } from "../../../common/models/page.model";
import { environment } from '.././../../../environments/environment';
import { DatePickerModel } from '../../../common/models/date-picker-model.model';
import { EditviewdevicecommComponent } from "../modalpopup/editviewdevicecomm/editviewdevicecomm.component";
import { deviceCommunicationModel } from "../../../common/models/device-communication-model";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-devicecommunication',
  templateUrl: './devicecommunication.component.html',
  styleUrls: ['./devicecommunication.component.sass']
})
export class DevicecommunicationComponent implements OnInit {
  cityDistrictConfig: CityDristict;
  cityDistrictCompData: any;
  parentFormSubmitted: boolean;
  showFilters: boolean = false;
  deviceCommunicationData : Array<deviceCommunicationModel>;
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
  noDataText: string = "No Device Communication Details Available";
  action: string;
  actionValue: string;
  formatDate: string;
  @ViewChild('validateCityDistrict') private CitydistrictComponent: CitydistrictComponent;
  private isCityDistrictValid(formValid: any) {
    this.cityDistrictCompData = formValid;
  }
  constructor(private deviceapi: DevicesService, private modalService: NgbModal,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //this.getAllDevices();
    this.activatedRoute.queryParams.subscribe(params => {
      this.action = Object.keys(params)[0];
      this.actionValue = params[this.action];
      this.getAllDevices();
  });
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  editDeviceCommunication(seletecdDevice) {
    const modalRef = this.modalService.open(EditviewdevicecommComponent, {
      size: 'lg', backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.selectedCommDeviceDetails = seletecdDevice;
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
    this.getAllDevices();
  }

  getAllDevices() {
    this.deviceapi.getAllDevicesCommunication(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText, this.districtId, this.cityId, this.rtoId,this.action,this.actionValue)
      .subscribe((_data: any) => {
        this.deviceCommunicationData = _data.content;
        this.page = _data.page;
        this.isDataExists = (this.deviceCommunicationData.length > 0);
      });
  }

}