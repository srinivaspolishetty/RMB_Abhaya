import { Component, OnInit } from '@angular/core';
import { DashboardsService } from "../../../common/services/dashboardserviceapi";
import { DeviceStatus } from "../../../common/models/dashboard.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-devicestatus',
  templateUrl: './devicestatus.component.html',
  styleUrls: ['./devicestatus.component.sass']
})
export class DevicestatusComponent implements OnInit {

  deviceStatus: DeviceStatus;
  isDataExists: Boolean = false;
  noDataText: string = 'Device Status Data Not Available';
  IGNITION: DeviceStatus
  MAIN_POWER_STATUS: DeviceStatus
  TAMPER_ALERT: DeviceStatus
  EMERGENCY: DeviceStatus
  COMMUNICATING: DeviceStatus
  MEMORY_PERCENTAGE: DeviceStatus
  BATTERY_PERCENTAGE: DeviceStatus

  constructor(private router: Router,private dashboardapi: DashboardsService) { }

  ngOnInit() {
  }

  getDeviceData(searchDate: string, districtId: string, cityId: string) {
    const actionsArray = ['IGNITION', 'MAIN_POWER_STATUS', 'TAMPER_ALERT', 'EMERGENCY', 'COMMUNICATING', 'MEMORY_PERCENTAGE', 'BATTERY_PERCENTAGE'];
    this.dashboardapi.getDeviceDetails(searchDate, districtId, cityId, actionsArray)
      .subscribe((_data: DeviceStatus) => {
        this.deviceStatus = _data;
        for (let i = 0; i < _data.length; i++) {
          this[_data[i].action] = _data[i];
        }
        this.isDataExists = (_data.length > 0);
      });
  }
  //for ignation status
  ignationRoute(e){
    this.router.navigate(['/devices/communication'], { queryParams: { ignitionStatus: e }});
  }

  //for lowBattery status
  lowBatteryRouter(e){
    this.router.navigate(['/devices/communication'], { queryParams: { batteryPercentage: e }});
  }

  //for communicating status
  deviceStatusRoute(e){
      this.router.navigate(['/devices/communication'], { queryParams: { status: e }})
  }

}
