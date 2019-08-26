import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AdministrativelistComponent } from './administrativelist/administrativelist.component';
import { AdminRoutingModule } from "./admin-routing.module";
import { CoreModule } from "../core/core.module";
import { AddeditadminlistComponent } from "./modalpopup/addeditadminlist/addeditadminlist.component";
import { ProdtestComponent } from './prodtest/prodtest.component';
import { ConfigurationComponent } from './configuration/configuration.component';

@NgModule({
  declarations: [AdministrativelistComponent, AddeditadminlistComponent, 
    ProdtestComponent, ConfigurationComponent, 
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    NgbModule,
    FormsModule,
    NgxPaginationModule
    
  ],
  entryComponents : [
    AddeditadminlistComponent,
  ],
})
export class AdminModule { }
