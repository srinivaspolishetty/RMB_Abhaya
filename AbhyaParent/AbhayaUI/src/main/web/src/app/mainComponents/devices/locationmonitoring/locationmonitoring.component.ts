import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CityDristict } from "../././../../common/models/citydristict.model";

import { CitydistrictComponent } from "../../../common/components/citydistrict/citydistrict.component";
import { DevicesService } from "../../../common/services/deviceserviceapi";
import { PageModel } from "../../../common/models/page.model";
import { environment } from '.././../../../environments/environment';
import { DatePickerModel } from '../../../common/models/date-picker-model.model';
import { EditviewLocationComponent } from "../modalpopup/editview-location/editview-location.component";
import { LocationModel } from "../../../common/models/locationmonitoring.model";
import { PaginationModel } from "../../../common/models/pagination.model";

@Component({
  selector: 'app-locationmonitoring',
  templateUrl: './locationmonitoring.component.html',
  styleUrls: ['./locationmonitoring.component.sass']
})
export class LocationmonitoringComponent implements OnInit {
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
  @ViewChild('validateCityDistrict') private CitydistrictComponent: CitydistrictComponent;
  private isCityDistrictValid(formValid: any) {
    this.cityDistrictCompData = formValid;
  }
  constructor(private deviceapi: DevicesService, private modalService: NgbModal) { }

  ngOnInit() {
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

  applyFilters(parentForm) {
    this.parentFormSubmitted = true;
    this.CitydistrictComponent.validateChildForm(this.parentFormSubmitted);
    if (!parentForm.valid || !this.cityDistrictCompData.isFormValid) {
      return;
    }
    else {
      this.showFilters = false;
      this.getLocationData();
    }

  }

  refreshPage(){
    this.intilPageNumber = 0;
    this.pageSize = environment.pageSize;
    this.searchDate = '';
    this.searchText = '';
    this.getLocationData();
  }
  getLocationData() {
    this.deviceapi.getLocationData(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText)
      .subscribe((_data: PaginationModel) => {
        this.locationDetails = _data.content;
        this.page = _data.page;
        this.isDataExists = (this.locationDetails.length > 0);
      });
  }

}


