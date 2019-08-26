import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from "../core/core.module";
import { TripComponent } from './trip.component';
import { TripRoutingModule } from "./trip-routing.module";
import { TriptrackingComponent } from './triptracking/triptracking.component';
import { PanicalertsComponent } from './panicalerts/panicalerts.component';
import { RoutedeviationComponent } from './routedeviation/routedeviation.component';
import { VideostreamingComponent } from './videostreaming/videostreaming.component';
import { ViewpanicDetailsComponent } from './modalpopup/viewpanic-details/viewpanic-details.component';
import { ViewroutedeviationComponent } from './modalpopup/viewroutedeviation/viewroutedeviation.component';
import { ViewtripdetailsComponent } from './modalpopup/viewtripdetails/viewtripdetails.component';

@NgModule({
  declarations: [TripComponent,
    TriptrackingComponent,
    PanicalertsComponent,
    RoutedeviationComponent,
    VideostreamingComponent,
    ViewpanicDetailsComponent,
    ViewroutedeviationComponent,
    ViewtripdetailsComponent],
  imports: [
    CommonModule,
    TripRoutingModule,
    AgmCoreModule,
    AgmDirectionModule,
    FormsModule,
    NgxPaginationModule,
    CoreModule,
    NgbModule
  ],
  entryComponents:[
    ViewpanicDetailsComponent,
    ViewroutedeviationComponent,
    ViewtripdetailsComponent
  ],
})
export class TripModule { }
