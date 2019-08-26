import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CityDristict } from "../././../../common/models/citydristict.model";
import { CitydistrictComponent } from "../../../common/components/citydistrict/citydistrict.component";
import { DevicesService } from "../../../common/services/deviceserviceapi";
import { PageModel } from "../../../common/models/page.model";
import { environment } from '.././../../../environments/environment';
import { DatePickerModel } from '../../../common/models/date-picker-model.model';
import { HealthModel } from "../../../common/models/healthmonitoring.model";
import { PaginationModel } from "../../../common/models/pagination.model";
import { EditviewhealthComponent } from "../modalpopup/editviewhealth/editviewhealth.component";

@Component({
  selector: 'app-healthmonitoring',
  templateUrl: './healthmonitoring.component.html',
  styleUrls: ['./healthmonitoring.component.sass']
})
export class HealthmonitoringComponent implements OnInit {
  cityDistrictConfig: CityDristict;
  cityDistrictCompData: any;
  parentFormSubmitted: boolean;
  showFilters: boolean = false;
  healthDetails: Array<HealthModel>;
  searchText: string = '';
  page: PageModel = new PageModel();
  isDataExists: Boolean = false;
  pageSizeValues: Array<number> = environment.pageSizeValues;
  pageSize: Number = environment.pageSize;
  intilPageNumber: Number = 0;
  p: Number;
  datePickerModel: DatePickerModel;
  searchDate: string;
  noDataText: string = 'No Health Monitoring Details Available';
  @ViewChild('validateCityDistrict') private CitydistrictComponent: CitydistrictComponent;
  private isCityDistrictValid(formValid: any) {
    this.cityDistrictCompData = formValid;
  }
  constructor(private deviceapi: DevicesService, private modalService: NgbModal) { }

  ngOnInit() {
    this.searchDate = '';
    this.getHealthData();
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  viewHealthDetails(healthDetails) {
    const modalRef = this.modalService.open(EditviewhealthComponent, {
      size: 'lg', backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.selectedHealthDetails = healthDetails;
  }
  changePageSize() {
    this.getHealthData();
  }
  pageChanged(event) {
    this.p = event;
    this.intilPageNumber = event - 1;
    this.getHealthData();
  }

  applyFilters(parentForm) {
    this.parentFormSubmitted = true;
    this.CitydistrictComponent.validateChildForm(this.parentFormSubmitted);
    if (!parentForm.valid || !this.cityDistrictCompData.isFormValid) {
      return;
    }
    else {
      this.showFilters = false;
      this.getHealthData();
    }

  }
  refreshPage(){
    this.intilPageNumber = 0;
    this.pageSize = environment.pageSize;
    this.searchDate = '';
    this.searchText = '';
    this.getHealthData();
  }
  getHealthData() {
    this.deviceapi.getHealthData(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText)
      .subscribe((_data: PaginationModel) => {
        this.healthDetails = _data.content;
        this.page = _data.page;
        this.isDataExists = (this.healthDetails.length > 0);
      });
  }

}