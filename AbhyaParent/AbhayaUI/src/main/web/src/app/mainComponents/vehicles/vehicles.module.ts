import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { QRCodeModule } from 'angularx-qrcode';
import { VehicleRoutingModule } from "./vehicles-routing.module";
import { VehiclesComponent } from './vehicles.component';
import { SuspiciousvehiclesComponent } from './suspiciousvehicles/suspiciousvehicles.component';
import { CoreModule } from "../core/core.module";
import { EditviewvehiclesComponent } from "./modalpopup/editviewvehicles/editviewvehicles.component";
import { EditviewsusvehiclesComponent } from "./modalpopup/editviewsusvehicles/editviewsusvehicles.component";

@NgModule({
  declarations: [VehiclesComponent, 
    SuspiciousvehiclesComponent,
    EditviewvehiclesComponent,
    EditviewsusvehiclesComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    FormsModule,
    NgxPaginationModule,
    BsDatepickerModule.forRoot(),
    NgbModule,
    CoreModule,
    QRCodeModule
  ],
  entryComponents : [
    EditviewvehiclesComponent,
    EditviewsusvehiclesComponent
  ],
})
export class VehiclesModule { }
