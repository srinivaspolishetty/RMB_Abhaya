import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DriversComponent } from './drivers.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DriversRoutingModule } from "./driversRoutingModule";
import { DriverdutyComponent } from './driverduty/driverduty.component';
import { CoreModule } from "../core/core.module";
import { EditviewdriverComponent } from "./modalpopup/editviewdriver/editviewdriver.component";
import { EditviewdriverdutyComponent } from "./modalpopup/editviewdriverduty/editviewdriverduty.component";
import { MaprfidComponent } from "./modalpopup/maprfid/maprfid.component";

@NgModule({
  declarations: [DriversComponent,
    DriverdutyComponent,
    MaprfidComponent,
    EditviewdriverComponent,
    EditviewdriverdutyComponent
  ],
  imports: [
    CommonModule,
    DriversRoutingModule,
    FormsModule,
    NgxPaginationModule,
    CoreModule,
    NgbModule
  ],
  entryComponents: [
    EditviewdriverComponent,
    MaprfidComponent,
    EditviewdriverdutyComponent
  ],
})
export class DriversModule { }
