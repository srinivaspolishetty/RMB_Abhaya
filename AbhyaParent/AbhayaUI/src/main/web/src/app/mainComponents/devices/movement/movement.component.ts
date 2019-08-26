import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CityDristict } from "../././../../common/models/citydristict.model";

import { CitydistrictComponent } from "../../../common/components/citydistrict/citydistrict.component";
import { DevicesService } from "../../../common/services/deviceserviceapi";
import { PageModel } from "../../../common/models/page.model";
import { environment } from '.././../../../environments/environment';
import { DatePickerModel } from '../../../common/models/date-picker-model.model';
import { EditviewmovementComponent } from "../modalpopup/editviewmovement/editviewmovement.component";

@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.sass']
})
export class MovementComponent implements OnInit {
  cityDistrictConfig: CityDristict;
  cityDistrictCompData: any;
  parentFormSubmitted: boolean;
  showFilters: boolean = false;
  movementData; //Need to create the model
  searchText: string = '';
  page: PageModel = new PageModel();
  isDataExists: Boolean = false;
  pageSizeValues: Array<number> = environment.pageSizeValues;
  pageSize: Number = environment.pageSize;
  intilPageNumber: Number = 0;
  p: Number;
  datePickerModel: DatePickerModel;
  searchDate: string = '';
  noDataText: string = 'No Movement Details Available';
  status : string = 'Communicating';
  vehicleMode : string = '';
  stateId : string = '';
  districtId : string = '';
  cityId : string = '';
  rtoId : string = '';

  @ViewChild('validateCityDistrict') private CitydistrictComponent: CitydistrictComponent;
  private isCityDistrictValid(formValid: any) {
    this.cityDistrictCompData = formValid;
  }
  constructor(private deviceapi: DevicesService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getMovementDetails();
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  viewMovement(movementDetails) {
    const modalRef = this.modalService.open(EditviewmovementComponent, {
      size: 'lg', backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.selectedMovementDetails = movementDetails;
  }
  changePageSize() {
    this.getMovementDetails();
  }
  pageChanged(event) {
    this.p = event;
    this.intilPageNumber = event - 1;
    this.getMovementDetails();
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
      this.getMovementDetails();
    }

  }
  refreshPage(){
    this.intilPageNumber = 0;
    this.pageSize = environment.pageSize;
    this.searchDate = '';
    this.searchText = '';
    this.stateId = '';
    this.districtId = '';
    this.cityId = '';
    this.vehicleMode = '';
    this.getMovementDetails();
  }
  getMovementDetails() {
    console.log(this.searchDate);
    this.deviceapi.getmovementDetails(this.intilPageNumber, this.pageSize, '', this.searchText,
      this.status, this.vehicleMode, this.stateId, this.districtId, this.cityId,this.rtoId)
      .subscribe((_data: any) => {
        this.movementData = _data.content;
        this.page = _data.page;
        this.isDataExists = (this.movementData.length > 0);
      });
  }

}