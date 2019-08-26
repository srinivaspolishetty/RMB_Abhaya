import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AddeditadminlistComponent } from "../modalpopup/addeditadminlist/addeditadminlist.component";
import { CommonsService } from "../../../common/services/commonserviceapi";
import { UserDetails } from "../../../common/models/userdetails.model";
import { CityDristictData } from "../../../common/models/citydristictdata.model";

@Component({
  selector: 'app-administrativelist',
  templateUrl: './administrativelist.component.html',
  styleUrls: ['./administrativelist.component.sass']
})
export class AdministrativelistComponent implements OnInit {

  userDetails: UserDetails;
  defaultStateId: number;
  districtArray: CityDristictData;
  public cityarray: CityDristictData;
  searchText : string;
  showDistricts: boolean = true;
  isDataExists : boolean = false;
  isCityDataExists : boolean = false;
  noDataText: string = 'No Districts Available'
  noCityDataText: string = 'No Cities Available'
  constructor(private modalService: NgbModal, private commonapi: CommonsService) {
    this.userDetails = JSON.parse(localStorage.getItem('userdetails'));
    this.defaultStateId = this.userDetails.stateId;
  }

  ngOnInit() {
    this.getAllDistricts();
  }

  openAdministrative(selectedObj) {
    const modalRef = this.modalService.open(AddeditadminlistComponent, {
      size: 'lg', backdrop: 'static',
      keyboard: false
    })
    modalRef.componentInstance.selectedVal = selectedObj
    modalRef.result.then((result) => {
      if (result === 'refreshContent') {
      }
    }).catch((error) => {
    });
  }

  getAllDistricts() {
    this.commonapi.getComboData('districtService', this.userDetails.stateId)
      .subscribe((data: CityDristictData) => {
        this.districtArray = data;
        this.isDataExists = (this.districtArray.length > 0);
      });
  }

  getCities(dristrictId) {
    if (dristrictId !== '') {
      this.commonapi.getComboData('cityService', this.userDetails.stateId)
        .subscribe((data: CityDristictData) => {
          this.cityarray = data;
          this.showDistricts = false;
          this.isCityDataExists = (this.cityarray.length > 0);
        });
    }
  }

}
