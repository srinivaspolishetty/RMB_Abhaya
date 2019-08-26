import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CityDristict } from "../././../../common/models/citydristict.model";

import { reportsModel } from '../../../common/models/reports-model';
import { DriversService } from '../../../common/services/driversServiceApi';
import { PieChart } from "../../../common/models/piechart.model";
import { CitydistrictComponent } from "../../../common/components/citydistrict/citydistrict.component";
import { VehicleServiceApi } from "../../../common/services/vehicleserviceapi";
import { PageModel } from "../../../common/models/page.model";
import { environment } from '.././../../../environments/environment';
import { DatePickerModel } from '../../../common/models/date-picker-model.model';
import { LivetrackingComponent } from ".././livetracking/livetracking.component";
import { VehicleauthComponent } from ".././vehicleauth/vehicleauth.component";
import { PanicalertsComponent } from ".././panicalerts/panicalerts.component";
import { DevicestatusComponent } from ".././devicestatus/devicestatus.component";
import { QuickactionComponent } from ".././quickaction/quickaction.component";
import { UserDetails } from "../../../common/models/userdetails.model";


@Component({
  selector: 'app-policedashboard',
  templateUrl: './policedashboard.component.html',
  styleUrls: ['./policedashboard.component.sass']
})
export class PolicedashboardComponent implements OnInit {
  name = 'Angular';
  // [barPadding]="2";
  single = [
    {
      "name": "Web",
      "value": 10
    },
    {
      "name": "Mobile",
      "value": 5
    },
    {
      "name": "Device",
      "value": 12
    },
  ];



  view: any[] = [800, 200];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = '';
  yAxisLabel = 'No of Panics';
  autoScale;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };


  @ViewChild('liveTrackingView')
  private liveTrackingView: LivetrackingComponent;
  
  @ViewChild('panicAlertsView')
  private panicAlertsView: PanicalertsComponent;
  
  @ViewChild('quickActionView')
  private quickActionView: QuickactionComponent;




  cityDistrictConfig: CityDristict;
  cityDistrictCompData : any;
  parentFormSubmitted: boolean;
  showFilters: boolean = false;
  datePickerModel:DatePickerModel;
  districtId: string = '';
  cityId: string = '';
  rtoId: string = '';
  searchDate: string  = '';;
  userDetails: UserDetails;

  @ViewChild('validateCityDistrict') private CitydistrictComponent: CitydistrictComponent;
  private isCityDistrictValid(formValid: any) {
    this.cityDistrictCompData = formValid;
  }


  constructor() {
    this.userDetails = JSON.parse(localStorage.getItem('userdetails'));
   }

  ngOnInit() {
    this.getAllDashboardData();
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
    }
    this.getAllDashboardData();
    
  }


  getAllDashboardData(){
    this.liveTrackingView.getLiveTrackData(this.searchDate,this.districtId,this.cityId);
    this.panicAlertsView.getPanicData(this.searchDate,this.districtId,this.cityId);
    this.quickActionView.getPanicData(this.searchDate,this.districtId,this.cityId, this.rtoId);
  }

}