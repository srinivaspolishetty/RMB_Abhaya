import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { UserDetails } from "../../../../common/models/userdetails.model";
import { District } from "../../../../common/models/district.model";
import { City } from "../../../../common/models/city.model";
import { CommonsService } from "../../../../common/services/commonserviceapi";
import { CityDristictData } from "../../../../common/models/citydristictdata.model";
import { AdminService } from "../../../../common/services/adminserviceapi";

@Component({
  selector: 'app-addeditadminlist',
  templateUrl: './addeditadminlist.component.html',
  styleUrls: ['./addeditadminlist.component.sass']
})
export class AddeditadminlistComponent implements OnInit {

  @Input() selectedVal : CityDristictData;
  userDetails: UserDetails;
  districtArray : CityDristictData;
  selectType: string = '';
  defaultStateId: number;
  defaultStateName: string;
  districtDetails: District;
  cityDetails: City;
  newDistrictName: string;
  showStateFields: boolean = false;
  showDistrictFields: boolean = false;
  showCityFields: boolean = false;
  newCityName: string;
  newCityCode: string;
  selectedDistrict : string = '';
  selectedDistrictName : string = '';
  constructor(public activeModal: NgbActiveModal, private adminApiService: AdminService,
    private commonapi : CommonsService) {
    this.userDetails = JSON.parse(localStorage.getItem('userdetails'));
    this.defaultStateId = this.userDetails.stateId;
    this.defaultStateName = this.userDetails.stateName;
  }

  ngOnInit() {
    console.log(this.selectedVal);
  }
  selectTypeChange() {
    if (this.selectType == 'district') {
      this.showStateFields = true;
      this.showDistrictFields = true;
      this.showCityFields = false;
    }
    else if (this.selectType == 'city') {
      this.showStateFields = true;
      this.showDistrictFields = false;
      this.showCityFields = true;
      this.getAllDistricts();
    }
    else {
      this.showStateFields = false;
      this.showDistrictFields = false;
      this.showCityFields = false;
    }
  }
  saveupdate() {
    if (this.selectType == 'district') {
      this.saevDistrict();
    }
    else if (this.selectType == 'city') {
      this.saevCity();
    }
  }
  getAllDistricts() {
    this.commonapi.getComboData('districtService', this.userDetails.stateId)
    .subscribe((data:CityDristictData) => {
      this.districtArray = data;
    });
  }
  districtChange(selectedDistrict, event) {
    const selectedOptions = event.target['options'];
    const selectedIndex = selectedOptions.selectedIndex;
    const selectElementText = selectedOptions[selectedIndex].text;
    this.selectedDistrictName = selectElementText;
  }
  saevDistrict() {
    this.districtDetails = new District(this.newDistrictName, this.newDistrictName, this.defaultStateId, this.defaultStateName);
    this.adminApiService.createDistrict(JSON.stringify(this.districtDetails))
      .subscribe((_data: any) => {
        console.log('success');
        this.activeModal.close('refreshContent');
      }, error => {
        console.log('Error', error);
        this.activeModal.close('Close click');
      });
  }

  saevCity() {
    this.cityDetails = new City(this.newCityName, this.newCityCode, this.selectedDistrict,
      this.selectedDistrictName, this.defaultStateId, this.defaultStateName);
    this.adminApiService.createCity(JSON.stringify(this.cityDetails))
      .subscribe((_data: any) => {
        console.log('success');
        this.activeModal.close('refreshContent');
      }, error => {
        console.log('Error', error);
        this.activeModal.close('Close click');
      });
  }

}