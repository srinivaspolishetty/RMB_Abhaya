import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { AgmCoreModule } from '@agm/core';

import { DashboardRoutingModule } from "../dashboard/dashboard-routing.module";
import { DashboardComponent } from './dashboard.component';
import { CoreModule } from "../core/core.module";
import { MapviewComponent } from './mapview/mapview.component';
import { LivetrackingComponent } from './livetracking/livetracking.component';
import { PanicalertsComponent } from './panicalerts/panicalerts.component';
import { VehicleauthComponent } from './vehicleauth/vehicleauth.component';
import { DevicestatusComponent } from './devicestatus/devicestatus.component';
import { QuickactionComponent } from './quickaction/quickaction.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxPaginationModule } from 'ngx-pagination';
import { PolicedashboardComponent } from './policedashboard/policedashboard.component';

@NgModule({
  declarations: [DashboardComponent, MapviewComponent, LivetrackingComponent, PanicalertsComponent, VehicleauthComponent, DevicestatusComponent, QuickactionComponent, PolicedashboardComponent, 
    ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AgmCoreModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    CoreModule,
    NgxChartsModule,
    NgxPaginationModule
  ]
})
export class DashboardModule { }
