import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CityDristict } from "../../models/citydristict.model";
import { CommonsService } from "../../services/commonserviceapi";
import { CityDristictData } from "../../models/citydristictdata.model";
import { UserDetails } from "../../models/userdetails.model";

@Component({
  selector: 'app-citydistrict',
  templateUrl: './citydistrict.component.html',
  styleUrls: ['./citydistrict.component.sass']
})
export class CitydistrictComponent implements OnInit {
  @Input() cityDistrictConfig:CityDristict;
  defaultconfig = new CityDristict();
  userDetails: UserDetails;
  

  @Output() isCityDistrictValid : EventEmitter<any> = new EventEmitter<any> ();

  @ViewChild('childForm') form;

  constructor(private httpClient: HttpClient, private commonapi : CommonsService) { 
    this.userDetails = JSON.parse(localStorage.getItem('userdetails'));
  }

  districtArray : CityDristictData;
  cityarray : CityDristictData;
  rtoOfficeArray : CityDristictData;
  isDistrictRequuired : boolean = false;
  

  
public validateChildForm(data:any){
  this.form.submitted = data;
if(data == true){
  if(this.form.valid == true){
    this.cityDistrictConfig.isFormValid = true;
    this.isCityDistrictValid.emit(this.cityDistrictConfig);
  }
  else{
    this.isCityDistrictValid.emit(this.cityDistrictConfig);
  }
}
}
  


  ngOnInit() {
    this.cityDistrictConfig = {...this.defaultconfig,...this.cityDistrictConfig};
    this.getAllDistricts();
  }

  getAllDistricts() {
    this.commonapi.getComboData('districtService', this.userDetails.stateId)
    .subscribe((data:CityDristictData) => {
      this.districtArray = data;
    });
  }

  getCities(dristrictId){
    this.cityDistrictConfig.cityName = '';
    if(dristrictId !== ''){
      this.commonapi.getComboData('cityService', dristrictId)
    .subscribe((data:CityDristictData) => {
      this.cityarray = data;
    });
    }
  }

  getRtoOffice(cityId){
    this.cityDistrictConfig.cityName = '';
    if(cityId !== ''){
      this.commonapi.getComboData('rtoOfficeService', cityId)
    .subscribe((data:CityDristictData) => {
      this.rtoOfficeArray = data;
    });
    }
  }

  cityChange(){
  }

}
