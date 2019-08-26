import { Component, OnInit } from '@angular/core';
import { DashboardsService } from "../../../common/services/dashboardserviceapi";
import { vehicleAuth } from "../../../common/models/dashboard.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicleauth',
  templateUrl: './vehicleauth.component.html',
  styleUrls: ['./vehicleauth.component.sass']
})
export class VehicleauthComponent implements OnInit {

  vehicleAuthData : vehicleAuth;
  isDataExists: Boolean = false;
  noDataText: string = 'Vehicle Auth Data Not Available';

  constructor(private router: Router,private dashboardapi: DashboardsService) { }

  ngOnInit() {
  }

  getAuthData(searchDate: string, districtId: string, cityId: string) {
    this.dashboardapi.getAuthDetails(searchDate, districtId, cityId)
      .subscribe((_data: vehicleAuth) => {
        this.vehicleAuthData = _data[0];
        this.isDataExists = (_data.length > 0);
      });
  }

  authVehicleRoute(e){
    this.router.navigate(['/vehicles'], { queryParams: { isVehicleAuth: e }});
  }
}
