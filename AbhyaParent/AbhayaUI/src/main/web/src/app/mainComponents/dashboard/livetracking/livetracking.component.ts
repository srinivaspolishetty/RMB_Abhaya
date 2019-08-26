import { Component, OnInit } from '@angular/core';
import { DashboardsService } from "../../../common/services/dashboardserviceapi";
import { Livetracking } from "../../../common/models/dashboard.model";
import { Routedeviation } from "../../../common/models/dashboard.model";

@Component({
  selector: 'app-livetracking',
  templateUrl: './livetracking.component.html',
  styleUrls: ['./livetracking.component.sass']
})
export class LivetrackingComponent implements OnInit {

  liveTrackingData: Livetracking;
  routeDeviationData : Routedeviation;
  isDataExists: Boolean = false;
  noDataText: string = 'No Live Tracking Data Available';

  constructor(private dashboardapi: DashboardsService) { }

  ngOnInit() {
  }

  getLiveTrackData(searchDate: string, districtId: string, cityId: string) {
    this.dashboardapi.getLiveTracking(searchDate, districtId, cityId)
      .subscribe((_data: Livetracking) => {
        this.liveTrackingData = _data[0]
        this.dashboardapi.getRouteDeviation(searchDate, districtId, cityId)
          .subscribe((_data: Routedeviation) => {
            this.routeDeviationData = _data;
            this.isDataExists = (_data.length > 0);
          })
      });
  }

}
