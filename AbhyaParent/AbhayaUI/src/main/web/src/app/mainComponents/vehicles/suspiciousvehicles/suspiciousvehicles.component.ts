import { Component, OnInit, ViewChild } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CityDristict } from "../././../../common/models/citydristict.model";
import { CitydistrictComponent } from "../../../common/components/citydistrict/citydistrict.component";
import { DatePickerModel } from '../../../common/models/date-picker-model.model';
import { VehicleServiceApi } from "../../../common/services/vehicleserviceapi";
import { suspiciousVehiclesModel } from '../../../common/models/suspicious-vehicles-model';
import { environment } from 'src/environments/environment';
import { PaginationModel } from "../../../common/models/pagination.model";
import { PageModel } from 'src/app/common/models/page.model';
import { EditviewsusvehiclesComponent } from "../modalpopup/editviewsusvehicles/editviewsusvehicles.component";

@Component({
  selector: 'app-suspiciousvehicles',
  templateUrl: './suspiciousvehicles.component.html',
  styleUrls: ['./suspiciousvehicles.component.sass']
})
export class SuspiciousvehiclesComponent implements OnInit {

  constructor(private vehicleApi: VehicleServiceApi, private modalService: NgbModal) { }

  cityDistrictConfig: CityDristict;
  cityDistrictCompData: any;
  parentFormSubmitted: boolean;
  showFilters: boolean = false;
  datePickerModel: DatePickerModel;
  districtId : string = '';
  cityId : string = '';
  rtoId : string = '';
  noDataText: string = 'No Suspicious Vehicles Details Available';
  @ViewChild('validateCityDistrict') private CitydistrictComponent: CitydistrictComponent;
  private isCityDistrictValid(formValid: any) {
    this.cityDistrictCompData = formValid;
  }

  suspiciousVehiclesData: Array<suspiciousVehiclesModel>;
  pageSizeValues: Array<number> = environment.pageSizeValues;
  pageSize: Number = environment.pageSize;
  intilPageNumber: Number = 0;
  isDataExists: Boolean = false;
  page: PageModel = new PageModel();
  searchDate: string = '';
  searchText: string = '';
  p: Number;

  ngOnInit() {
    this.getSuspiciousVehiclesDetails();
  }
  toggleFilters() {
    this.showFilters = !this.showFilters;
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
      this.getSuspiciousVehiclesDetails();
    }

  }

  editviewsusVehicle(selectedVehicle) {
    const modalRef = this.modalService.open(EditviewsusvehiclesComponent, {
      size: 'lg', backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.selectedVehicle = selectedVehicle;
  }

  refreshPage(){
    this.intilPageNumber = 0;
    this.pageSize = environment.pageSize;
    this.searchDate = '';
    this.searchText = '';
    this.districtId = ''; 
    this.cityId = '';
    this.getSuspiciousVehiclesDetails();
  }
  getSuspiciousVehiclesDetails() {
    this.vehicleApi.getAllSusVehicleDetails(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText, this.districtId, this.cityId,this.rtoId)
      .subscribe((_data: PaginationModel) => {
        this.suspiciousVehiclesData = _data.content;
        console.log(this.suspiciousVehiclesData);
        this.page = _data.page;
        this.isDataExists = (this.suspiciousVehiclesData.length > 0);
      });
  }

  changePageSize() {
    this.getSuspiciousVehiclesDetails();
  }
  pageChanged(event) {
    this.p = event;
    this.intilPageNumber = event - 1;
    this.getSuspiciousVehiclesDetails();
  }
}
