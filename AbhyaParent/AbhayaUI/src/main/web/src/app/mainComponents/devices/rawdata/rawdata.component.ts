import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CityDristict } from "../././../../common/models/citydristict.model";
import { CitydistrictComponent } from "../../../common/components/citydistrict/citydistrict.component";
import { DevicesService } from "../../../common/services/deviceserviceapi";
import { PageModel } from "../../../common/models/page.model";
import { environment } from '.././../../../environments/environment';
import { DatePickerModel } from '../../../common/models/date-picker-model.model';
import { RawData } from "../../../common/models/rawdata.model";
import { PaginationModel } from "../../../common/models/pagination.model";
import { EditviewrawdataComponent } from "../modalpopup/editviewrawdata/editviewrawdata.component";

@Component({
  selector: 'app-rawdata',
  templateUrl: './rawdata.component.html',
  styleUrls: ['./rawdata.component.sass']
})
export class RawdataComponent implements OnInit {
  cityDistrictConfig: CityDristict;
  cityDistrictCompData : any;
  parentFormSubmitted: boolean;
  showFilters: boolean = false;
  rawData : Array<RawData>;
  searchText: string = '';
  page: PageModel = new PageModel();
  isDataExists: Boolean = false;
  pageSizeValues: Array<number> = environment.pageSizeValues;
  pageSize: Number = environment.pageSize;
  intilPageNumber: Number = 0;
  p: Number;
  updateRawdata: any;
  intervalTime: number = environment.setIntervalTime;
  datePickerModel:DatePickerModel;
  searchDate: string = '';
  districtId: string = '';
  cityId: string = '';
  noDataText : string = 'No Raw Data Available';
  @ViewChild('validateCityDistrict') private CitydistrictComponent: CitydistrictComponent;
  private isCityDistrictValid(formValid: any) {
    this.cityDistrictCompData = formValid;
  }
  constructor(private deviceapi: DevicesService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getRawData();
    this.updateRawdata = setInterval(() => {
      this.p = 1;
      this.getRawData();
  }, this.intervalTime);
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  viewRawData(selectedRawData){
  const modalRef = this.modalService.open(EditviewrawdataComponent, {
    size: 'lg', backdrop: 'static',
    keyboard: false
});
modalRef.componentInstance.selectedrawdata = selectedRawData;
}
  changePageSize() {
    this.getRawData();
  }
  pageChanged(event) {
    this.p = event;
    this.intilPageNumber = event - 1;
    this.getRawData();
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
      this.showFilters = false;
      this.getRawData();
    }
    
  }
  refreshPage(){
    this.intilPageNumber = 0;
    this.pageSize = environment.pageSize;
    this.searchDate = '';
    this.searchText = '';
    this.districtId = '';
    this.cityId = '';
    this.getRawData();
  }
  getRawData() {
    this.deviceapi.getRawData(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText, this.districtId, this.cityId)
      .subscribe((_data: PaginationModel) => {
        this.rawData = _data.content;
        this.page = _data.page;
        this.isDataExists = (this.rawData.length > 0);
      });
  }
  ngOnDestroy() {
    if (this.updateRawdata) {
        clearInterval(this.updateRawdata);
    }
}

}