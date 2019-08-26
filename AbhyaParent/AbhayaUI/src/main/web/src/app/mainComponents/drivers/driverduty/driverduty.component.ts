import { Component, OnInit, ViewChild } from '@angular/core';
import { driversModel } from '../../../common/models/drivers-model';
import { DriversService } from '../../../common/services/driversServiceApi';
import { environment } from '.././../../../environments/environment';
import { PageModel } from "../../../common/models/page.model";
import { CitydistrictComponent } from "../../../common/components/citydistrict/citydistrict.component";
import { CityDristict } from "../././../../common/models/citydristict.model";
import { DatePickerModel } from '../../../common/models/date-picker-model.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditviewdriverdutyComponent } from "../modalpopup/editviewdriverduty/editviewdriverduty.component";
import { DriverDuty } from "../../../common/models/driverDuty.model";
import { PaginationModel } from "../../../common/models/pagination.model";


@Component({
  selector: 'app-driverduty',
  templateUrl: './driverduty.component.html',
  styleUrls: ['./driverduty.component.sass']
})
export class DriverdutyComponent implements OnInit {

  constructor(private driversApi: DriversService, private modalService: NgbModal) { }
  driverDutyDetails: Array<DriverDuty>;
  pageSizeValues: Array<number> = environment.pageSizeValues;
  pageSize: Number = environment.pageSize;
  intilPageNumber: Number = 0;
  isDataExists: Boolean = false;
  page: PageModel = new PageModel();
  searchText: string = '';
  p: Number;
  districtId: string = '';
  cityId: string = '';
  rtoId: string = '';
  cityDistrictConfig: CityDristict;
  cityDistrictCompData: any;
  parentFormSubmitted: boolean;
  showFilters: boolean = false;
  datePickerModel: DatePickerModel = new DatePickerModel;
  searchDate: string = '';
  noDataText: string = 'No Driver Duty Details Available';
  @ViewChild('validateCityDistrict') private CitydistrictComponent: CitydistrictComponent;
  private isCityDistrictValid(formValid: any) {
    this.cityDistrictCompData = formValid;
  }

  ngOnInit() {
    // this.searchDate = this.datePickerModel.newDate = new Date().toString();
    this.getDriverDutyDetails();
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
      this.getDriverDutyDetails();
    }

  }

  changePageSize() {
    this.getDriverDutyDetails();
  }
  pageChanged(event) {
    this.p = event;
    this.intilPageNumber = event - 1;
    this.getDriverDutyDetails();
  }

  editviewdriver(driverDuty: DriverDuty) {
    const modalRef = this.modalService.open(EditviewdriverdutyComponent, {
      size: 'lg', backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.selectedDriverDutyDetails = driverDuty;
  }
  refreshPage(){
    this.intilPageNumber = 0;
    this.pageSize = environment.pageSize;
    this.searchDate = '';
    this.searchText = '';
    this.districtId = ''; 
    this.cityId = '';
    this.getDriverDutyDetails();
  }
  getDriverDutyDetails() {
    this.driversApi.getAllDriverDutyDetails(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText, this.districtId, this.cityId,this.rtoId)
      .subscribe((_data: PaginationModel) => {
        this.driverDutyDetails = _data.content;
        this.page = _data.page;
        this.isDataExists = (this.driverDutyDetails.length > 0);
      });
  }

}