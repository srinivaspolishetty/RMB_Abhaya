import { Component, OnInit, ViewChild } from '@angular/core';
import { driversModel } from '../../common/models/drivers-model';
import { DriversService } from '../../common/services/driversServiceApi';
import { environment } from './../../../environments/environment';
import { PageModel } from "../../common/models/page.model";
import { CitydistrictComponent } from "../../common/components/citydistrict/citydistrict.component";
import { CityDristict } from "././../../common/models/citydristict.model";
import { DatePickerModel } from '../../common/models/date-picker-model.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditviewdriverComponent } from "./modalpopup/editviewdriver/editviewdriver.component";
import { PaginationModel } from "../../common/models/pagination.model";
import { MaprfidComponent } from "./modalpopup/maprfid/maprfid.component";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.sass']
})
export class DriversComponent implements OnInit {

  constructor(private driversApi: DriversService, private modalService: NgbModal) { }
  driverDetails: Array<driversModel> = []; //driversModel;
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
  cityDistrictCompData : any;
  parentFormSubmitted: boolean;
  showFilters: boolean = false;
  datePickerModel:DatePickerModel;
  searchDate: string  = '';;
  noDataText : string = 'No Driver Details Available';
  @ViewChild('validateCityDistrict') private CitydistrictComponent: CitydistrictComponent;
  private isCityDistrictValid(formValid: any) {
    this.cityDistrictCompData = formValid;
  }

  ngOnInit() {
    this.getDriverDetails();
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
      this.getDriverDetails();
    }
    
  }

  changePageSize() {
    this.getDriverDetails();
  }
  pageChanged(event) {
    this.p = event;
    this.intilPageNumber = event - 1;
    this.getDriverDetails();
  }

  editviewdriver(selectedDriver) {
    const modalRef = this.modalService.open(EditviewdriverComponent, {
      size: 'lg', backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.selectedDriverDetails = selectedDriver;
  }
  mapRfId(selectedDriver) {
    const modalRef = this.modalService.open(MaprfidComponent, {
      size: 'lg', backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.selectedDriverDetails = selectedDriver;
  }
  refreshPage(){
    this.intilPageNumber = 0;
    this.pageSize = environment.pageSize;
    this.searchDate = '';
    this.searchText = '';
    this.districtId = ''; 
    this.cityId = '';
    this.getDriverDetails();
  }
  getDriverDetails() {
    this.driversApi.getAllDriverDetails(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText, this.districtId, this.cityId, this.rtoId)
      .subscribe((_data: PaginationModel) => {
        this.driverDetails = _data.content;
        this.page = _data.page;
        this.isDataExists = (this.driverDetails.length > 0);
      });
  }

}
