import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from "../core/core.module";

import { DevicesComponent } from './devices.component';
import { DevicesRoutingModule } from "./devicesRoutingModule";
import { DevicereportComponent } from './devicereport/devicereport.component';
import { DevicecommunicationComponent } from './devicecommunication/devicecommunication.component';
import { MovementComponent } from './movement/movement.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RawdataComponent } from './rawdata/rawdata.component';
import { LocationmonitoringComponent } from './locationmonitoring/locationmonitoring.component';
import { EmergencymonitoringComponent } from './emergencymonitoring/emergencymonitoring.component';
import { HealthmonitoringComponent } from './healthmonitoring/healthmonitoring.component';

import { EditviewdevicesComponent } from "./modalpopup/editviewdevices/editviewdevices.component";
import { EditviewdevicecommComponent } from "./modalpopup/editviewdevicecomm/editviewdevicecomm.component";
import { EditviewmovementComponent } from "./modalpopup/editviewmovement/editviewmovement.component";
import { EditviewemergencyComponent } from "./modalpopup/editviewemergency/editviewemergency.component";
import { EditviewhealthComponent } from "./modalpopup/editviewhealth/editviewhealth.component";
import { EditviewrawdataComponent } from "./modalpopup/editviewrawdata/editviewrawdata.component";

@NgModule({
  declarations: [DevicesComponent,
    DevicereportComponent,
    DevicecommunicationComponent,
    MovementComponent,
    RawdataComponent,
    LocationmonitoringComponent,
    EmergencymonitoringComponent,
    HealthmonitoringComponent,
    EditviewdevicesComponent,
    EditviewdevicecommComponent,
    EditviewmovementComponent,
    EditviewemergencyComponent,
    EditviewhealthComponent,
    EditviewrawdataComponent
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    NgxPaginationModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    NgbModule,
    CoreModule
  ],
  entryComponents : [
    EditviewdevicesComponent,
    EditviewdevicecommComponent,
    EditviewmovementComponent,
    EditviewemergencyComponent,
    EditviewhealthComponent,
    EditviewrawdataComponent
  ],
})
export class DevicesModule { }
