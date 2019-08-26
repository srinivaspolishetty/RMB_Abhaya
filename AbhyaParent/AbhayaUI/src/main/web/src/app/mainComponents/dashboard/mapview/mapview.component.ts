import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CityDristict } from "../././../../common/models/citydristict.model";
declare var google: any;

import { CitydistrictComponent } from "../../../common/components/citydistrict/citydistrict.component";
import { DevicesService } from "../../../common/services/deviceserviceapi";
import { PageModel } from "../../../common/models/page.model";
import { environment } from '.././../../../environments/environment';
import { DatePickerModel } from '../../../common/models/date-picker-model.model';
import { PaginationModel } from "../../../common/models/pagination.model";
import { vehiclesModel } from "../../../common/models/vehicles.model";
import { UserDetails } from "../../../common/models/userdetails.model";


@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.sass']
})
export class MapviewComponent implements OnInit {

  cityDistrictConfig: CityDristict;
  cityDistrictCompData: any;
  parentFormSubmitted: boolean;
  showFilters: boolean = false;
  datePickerModel: DatePickerModel;
  searchDate: string;
  liveVehicleArray: Array<vehiclesModel>;
  userDetails: UserDetails;



  lat = 16.53760681989354;
  lng = 80.6536762404969;
  iconURL = '../../../../assets/images/ic_auto.png';
  gMaps;
  map: any;
  zoom: 12;
  animation: string;

  mapReady(map) {
    this.map = map;
  }






  @ViewChild('vaidateChildComponentForm') private CitydistrictComponent: CitydistrictComponent;
  private isChildFormValid(formValid: any) {
    this.cityDistrictCompData = formValid;
  }


  constructor(private deviceapi: DevicesService) {
    this.userDetails = JSON.parse(localStorage.getItem('userdetails'));
   }

  ngOnInit() {
    this.cityDistrictConfig = {
      isDistrictRequired: true,
      isCityRequired: true
    };
    this.getLiveVehicles();
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
      console.log(this.cityDistrictCompData.districtName);
      console.log(this.cityDistrictCompData.cityName);
    }
    console.log(this.searchDate);
  }

  mapClicked($event: MouseEvent) {
    console.log($event);
  }

  getLiveVehicles() {
    this.deviceapi.getLiveDevices(this.userDetails.stateId)
    .subscribe((data: PaginationModel) => {
      this.liveVehicleArray = data.content;
      console.log(this.liveVehicleArray);
    });
  }
  clickedMarker(label: string, index: number, $event) {
    this.lat = $event.latitude;
    this.lng = $event.longitude;
    this.map.setCenter({ lat: $event.latitude, lng: $event.longitude });
    const position = new google.maps.LatLng($event.latitude, $event.longitude);
    this.map.panTo(position);
    this.map.setZoom(15);
  }

}