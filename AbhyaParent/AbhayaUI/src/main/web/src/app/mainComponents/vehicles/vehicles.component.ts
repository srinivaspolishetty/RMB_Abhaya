import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CityDristict } from "././../../common/models/citydristict.model";

declare let jsPDF;
import html2canvas from 'html2canvas';
import { CitydistrictComponent } from "../../common/components/citydistrict/citydistrict.component";
import { VehicleServiceApi } from "../../common/services/vehicleserviceapi";
import { PageModel } from "../../common/models/page.model";
import { environment } from './../../../environments/environment';
import { DatePickerModel } from '../../common/models/date-picker-model.model';
import { EditviewvehiclesComponent } from "./modalpopup/editviewvehicles/editviewvehicles.component";
import { vehiclesModel } from "../../common/models/vehicles.model";
import { PaginationModel } from "../../common/models/pagination.model";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.sass']
})
export class VehiclesComponent implements OnInit {
  cityDistrictConfig: CityDristict;
  cityDistrictCompData : any;
  parentFormSubmitted: boolean;
  showFilters: boolean = false;
  vehicleData : Array<vehiclesModel>;
  searchText: string = '';
  page: PageModel = new PageModel();
  isDataExists: Boolean = false;
  pageSizeValues: Array<number> = environment.pageSizeValues;
  pageSize: Number = environment.pageSize;
  intilPageNumber: Number = 0;
  p: Number;
  districtId : string = '';
  cityId : string = '';
  rtoId : string = '';
  datePickerModel:DatePickerModel;
  searchDate: string  = '';
  noDataText : string = 'No Vehicles Details Available';
  items: any;
  @ViewChild('validateCityDistrict') private CitydistrictComponent: CitydistrictComponent;
  isVehicleAuth: any = '';
  private isCityDistrictValid(formValid: any) {
    this.cityDistrictCompData = formValid;
  }
  constructor(private vehicleApi: VehicleServiceApi, private modalService: NgbModal, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchText = params['vehicleNumber'] !== undefined ? params['vehicleNumber'] : '';
      //this.isVehicleAuth = params['isVehicleAuth'] !== undefined ? params['isVehicleAuth'] : '';
      this.isVehicleAuth = params['isVehicleAuth'];
      if(this.isVehicleAuth == "true"){
        this.getAuthVehiclesTypeDetails(); 
      } else if(this.isVehicleAuth == "false"){
        this.getAuthVehiclesTypeDetails();
      } else {
        this.getVehicleDetails()
      }
    })
   }

  ngOnInit() {
    //this.getVehicleDetails();
    this.items = [
      {value: 'true', label : 'Auth'}, 
      {value: 'false', label : 'Unauth'}
    ];
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  editviewVehicle(selectedVehicle){
  const modalRef = this.modalService.open(EditviewvehiclesComponent, {
    size: 'lg', backdrop: 'static',
    keyboard: false
});
modalRef.componentInstance.selectedVehicleDetails = selectedVehicle;
}
  changePageSize() {
    this.getVehicleDetails();
  }
  pageChanged(event) {
    this.p = event;
    this.intilPageNumber = event - 1;
    this.getVehicleDetails();
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
      this.isVehicleAuth = parentForm.form.value.isVehicleAuth;
      this.showFilters = false;
      //this.getVehicleDetails();
      this.getAuthVehiclesTypeDetails();
    }
    
  }
  refreshPage(){
    this.intilPageNumber = 0;
    this.pageSize = environment.pageSize;
    this.searchDate = '';
    this.searchText = '';
    this.districtId = ''; 
    this.cityId = '';
    this.isVehicleAuth = '';
    this.getVehicleDetails();
  }
  getVehicleDetails() {
    this.vehicleApi.getAllVehicleDetails(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText, this.districtId, this.cityId, this.rtoId)
      .subscribe((_data: PaginationModel) => {
        this.vehicleData = _data.content;
        this.page = _data.page;
        this.isDataExists = (this.vehicleData.length > 0);
      });
  }

  getAuthVehiclesTypeDetails(){
    this.vehicleApi.getAuthVehiclesType(this.intilPageNumber, this.pageSize,this.searchDate, this.districtId, this.cityId, this.rtoId,this.isVehicleAuth)
      .subscribe((_data: PaginationModel) => {
        this.vehicleData = _data.content;
        this.page = _data.page;
        this.isDataExists = (this.vehicleData.length > 0);
      });
  }




  selectdRcNumber:string = 'undefined';

  downloadpdf(vehiclenumbr) {
    this.selectdRcNumber = vehiclenumbr.rcNumber;
    console.log(this.selectdRcNumber);
    if (this.selectdRcNumber !== 'undefined') {
      setTimeout(this.downloadqrcode, 500, this.selectdRcNumber);
    }
  }

  downloadqrcode(selectedVehicleNumber) {
    const data = document.getElementById('qrcode');
    html2canvas(data).then(canvas => {
      const imgWidth = 211;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/JPEG');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(contentDataURL, 'JPEG', 0, 0, imgWidth, imgHeight);
      pdf.save(selectedVehicleNumber + '.pdf');
    });
  }




}
