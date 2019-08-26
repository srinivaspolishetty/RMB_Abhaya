import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicesComponent } from "./devices.component";
import { DevicereportComponent } from "./devicereport/devicereport.component";
import { DevicecommunicationComponent } from "./devicecommunication/devicecommunication.component";
import { MovementComponent } from "./movement/movement.component";
import { RawdataComponent } from "./rawdata/rawdata.component";
import { LocationmonitoringComponent } from "./locationmonitoring/locationmonitoring.component";
import { EmergencymonitoringComponent } from "./emergencymonitoring/emergencymonitoring.component";
import { HealthmonitoringComponent } from "./healthmonitoring/healthmonitoring.component";

const routes: Routes = [
    { path: '', component: DevicesComponent, },
    { path: 'devicereport', component: DevicereportComponent, },
    { path: 'communication', component: DevicecommunicationComponent, },
    { path: 'movement', component: MovementComponent, },
    { path: 'rawdata', component: RawdataComponent, },
    { path: 'locationmonitoring', component: LocationmonitoringComponent, },
    { path: 'emergencymonitoring', component: EmergencymonitoringComponent, },
    { path: 'healthmonitoring', component: HealthmonitoringComponent, }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DevicesRoutingModule { }
