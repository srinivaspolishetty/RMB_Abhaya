import { Component, OnInit } from '@angular/core';
import { DashboardsService } from "../../../common/services/dashboardserviceapi";
import { PanicAlerts } from "../../../common/models/dashboard.model";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-panicalerts',
  templateUrl: './panicalerts.component.html',
  styleUrls: ['./panicalerts.component.sass']
})
export class PanicalertsComponent implements OnInit {

  panicData: PanicAlerts;
  devicePanicData: PanicAlerts;
  totalPanic: any;
  isDataExists: Boolean = false;
  noDataText: string = 'No Panic Data Available';

  constructor(private dashboardapi: DashboardsService, private router: Router) { }

  ngOnInit() {
  }

  panicDetailView(panicType) {
    this.router.navigate(['/trip/panicalerts'],
      {
        queryParams: { panicType: panicType },
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
            this.totalPanic = this.panicData.openWeb + this.panicData.openMobile + this.devicePanicData.openDevicePanic;
            this.isDataExists = (_data.length > 0);
          })
      });;
  }

}
