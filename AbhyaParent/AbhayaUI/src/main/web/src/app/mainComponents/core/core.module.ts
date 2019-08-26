import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { NgHttpLoaderModule } from 'ng-http-loader'; // Http reuest response loader
import { HttpClientModule } from '@angular/common/http'; // Http reuest response

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { LoginComponent } from "../login/login.component";
import { AppForbiddenNameDirective } from "../../common/directives/app-forbidden-name.directive";
import { HeaderComponent } from "../../common/components/header/header.component";
import { FooterComponent } from "../../common/components/footer/footer.component";
import { CitydistrictComponent } from "../../common/components/citydistrict/citydistrict.component";
import { DatepickerComponent } from '../../common/components/datepicker/datepicker.component';
import { NodataComponent } from "../../common/components/nodata/nodata.component";
import { EditviewLocationComponent } from "../devices/modalpopup/editview-location/editview-location.component";


@NgModule({
  declarations: [CoreComponent,
    AppForbiddenNameDirective,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CitydistrictComponent,
    DatepickerComponent,
    NodataComponent,
    EditviewLocationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreRoutingModule,
    BsDatepickerModule.forRoot(),
    NgHttpLoaderModule.forRoot(),
    HttpClientModule
  ],
  entryComponents: [
    EditviewLocationComponent
  ],
  exports: [CitydistrictComponent,
    DatepickerComponent,
    NodataComponent
  ]
})
export class CoreModule { }
