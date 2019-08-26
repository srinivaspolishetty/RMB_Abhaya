import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CityDristict } from "../././../../common/models/citydristict.model";
import { CitydistrictComponent } from "../../../common/components/citydistrict/citydistrict.component";
import { DevicesService } from "../../../common/services/deviceserviceapi";
import { PageModel } from "../../../common/models/page.model";
import { environment } from '.././../../../environments/environment';
import { DatePickerModel } from '../../../common/models/date-picker-model.model';
import { EmergencyModel } from "../../../common/models/emergencymonitoring.model";
import { PaginationModel } from "../../../common/models/pagination.model";
import { EditviewemergencyComponent } from "../modalpopup/editviewemergency/editviewemergency.component";

@Component({
  selector: 'app-emergencymonitoring',
  templateUrl: './emergencymonitoring.component.html',
  styleUrls: ['./emergencymonitoring.component.sass']
})
export class EmergencymonitoringComponent implements OnInit {
  cityDistrictConfig: CityDristict;
  cityDistrictCompData : any;
  parentFormSubmitted: boolean;
  showFilters: boolean = false;
  emergencyDetails : Array<EmergencyModel>;
  searchText: string = '';
  page: PageModel = new PageModel();
  isDataExists: Boolean = false;
  pageSizeValues: Array<number> = environment.pageSizeValues;
  pageSize: Number = environment.pageSize;
  intilPageNumber: Number = 0;
  p: Number;
  datePickerModel:DatePickerModel;
  searchDate: string;
  noDataText : string = 'No Emergency Data Available';
  @ViewChild('validateCityDistrict') private CitydistrictComponent: CitydistrictComponent;
  private isCityDistrictValid(formValid: any) {
    this.cityDistrictCompData = formValid;
  }
  constructor(private deviceapi: DevicesService, private modalService: NgbModal) { }

  ngOnInit() {
    this.searchDate = '';
    this.getEmergendyData();
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  ViewEmergancy(emergancyData){
  const modalRef = this.modalService.open(EditviewemergencyComponent, {
    size: 'lg', backdrop: 'static',
    keyboard: false
});
modalRef.componentInstance.selectedEmergencydata = emergancyData;
}
  changePageSize() {
    this.getEmergendyData();
  }
  pageChanged(event) {
    this.p = event;
    this.intilPageNumber = event - 1;
    this.getEmergendyData();
}

applyFilters(parentForm) {
    this.parentFormSubmitted = true;
    this.CitydistrictComponent.validateChildForm(this.parentFormSubmitted);
    if (!parentForm.valid || !this.cityDistrictCompData.isFormValid) {
      return;
    }
    else {
      this.showFilters = false;
      this.getEmergendyData();
    }
    
  }
  refreshPage(){
    this.intilPageNumber = 0;
    this.pageSize = environment.pageSize;
    this.searchDate = '';
    this.searchText = '';
    this.getEmergendyData();
  }
  getEmergendyData() {
    this.deviceapi.getemergancyDetails(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText)
      .subscribe((_data: PaginationModel) => {
        this.emergencyDetails = _data.content;
        this.page = _data.page;
        this.isDataExists = (this.emergencyDetails.length > 0);
      });
  }

}

