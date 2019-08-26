import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CityDristict } from "././../../common/models/citydristict.model";

import { reportsModel } from '../../common/models/reports-model';
import { DriversService } from '../../common/services/driversServiceApi';
import { PieChart } from "../../common/models/piechart.model";
import { CitydistrictComponent } from "../../common/components/citydistrict/citydistrict.component";
import { VehicleServiceApi } from "../../common/services/vehicleserviceapi";
import { PageModel } from "../../common/models/page.model";
import { environment } from './../../../environments/environment';
import { DatePickerModel } from '../../common/models/date-picker-model.model';
import { LivetrackingComponent } from "./livetracking/livetracking.component";
import { VehicleauthComponent } from "./vehicleauth/vehicleauth.component";
import { PanicalertsComponent } from "./panicalerts/panicalerts.component";
import { DevicestatusComponent } from "./devicestatus/devicestatus.component";
import { QuickactionComponent } from "./quickaction/quickaction.component";
import { UserDetails } from "../../common/models/userdetails.model";
import { DashboardsService } from "../../common/services/dashboardserviceapi";
import { PanicAlerts } from "../../common/models/dashboard.model";
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {


  name = 'Angular';
  panicGraphData;

  view: any[] = [800, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = '';
  yAxisLabel = 'No of Panics';
  barPadding = 50;
  autoScale;

  colorScheme = {
    domain: ['#5AA454', '#A10A28']
  };



  @ViewChild('liveTrackingView')
  private liveTrackingView: LivetrackingComponent;
  @ViewChild('vehicleAuthView')
  private vehicleAuthView: VehicleauthComponent;
  @ViewChild('panicAlertsView')
  private panicAlertsView: PanicalertsComponent;
  @ViewChild('deviceStatusView')
  private deviceStatusView: DevicestatusComponent;
  @ViewChild('quickActionView')
  private quickActionView: QuickactionComponent;




  cityDistrictConfig: CityDristict;
  cityDistrictCompData: any;
  parentFormSubmitted: boolean;
  showFilters: boolean = false;
  datePickerModel: DatePickerModel;
  districtId: string = '';
  cityId: string = '';
  rtoId: string = '';
  searchDate: string = '';;
  userDetails: UserDetails;
  panicData: PanicAlerts;
  devicePanicData: PanicAlerts;
  eventType : string;

  @ViewChild('validateCityDistrict') private CitydistrictComponent: CitydistrictComponent;
  private isCityDistrictValid(formValid: any) {
    this.cityDistrictCompData = formValid;
  }


  constructor(private dashboardapi: DashboardsService, private router: Router) {
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


  getAllDashboardData() {
    this.liveTrackingView.getLiveTrackData(this.searchDate, this.districtId, this.cityId);
    this.vehicleAuthView.getAuthData(this.searchDate, this.districtId, this.cityId);
    this.panicAlertsView.getPanicData(this.searchDate, this.districtId, this.cityId);
    this.deviceStatusView.getDeviceData(this.searchDate, this.districtId, this.cityId);
    this.quickActionView.getPanicData(this.searchDate, this.districtId, this.cityId, this.rtoId);
    this.getPanicData(this.searchDate, this.districtId, this.cityId);
  }
  onSelect(event) {
    if (event.name == 'Device Panics') {
      this.eventType = 'DEVICE'
    }
    if (event.name == 'Mobile Panics') {
      this.eventType = 'WEB'
    }
    this.router.navigate(['/trip/panicalerts'],
        {
          queryParams: { panicType: this.eventType },
          queryParamsHandling: 'merge'
        })
  }

  getPanicData(searchDate: string, districtId: string, cityId: string) {
    this.dashboardapi.getPanicDetails(searchDate, districtId, cityId)
      .subscribe((_data: PanicAlerts) => {
        this.panicData = _data[0];
        this.dashboardapi.getDevicePanic(searchDate, districtId, cityId)
          .subscribe((_data: PanicAlerts) => {
            this.devicePanicData = _data[0];
            //console.log(this.devicePanicData);
            this.panicGraphData = [
              {
                "name": "Device Panics",
                "value": this.devicePanicData.openDevicePanic
              },
              {
                "name": "Mobile Panics",
                "value": this.panicData.openWeb
              },
              {
                "name": " ",
                "value": 0
              },
              {
                "name": " ",
                "value": 0
              },
              {
                "name": " ",
                "value": 0
              },
              {
                "name": " ",
                "value": 0
              },
              {
                "name": " ",
                "value": 0
              },
              {
                "name": " ",
                "value": 0
              },
              {
                "name": " ",
                "value": 0
              }
            ];
          })
      });;
  }

}
