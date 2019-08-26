import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommandManagementRoutingModule } from './commandmanagement-routing.module';
import { CommandexecuteComponent } from './commandexecute/commandexecute.component';
import { CommandhistoryComponent } from './commandhistory/commandhistory.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CoreModule } from "../core/core.module";
import { BsDatepickerModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {EditviewcommhistoryComponent } from './modalpopup/editviewcommhistory/editviewcommhistory.component';

@NgModule({
  declarations: [CommandexecuteComponent, CommandhistoryComponent, EditviewcommhistoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    CommandManagementRoutingModule,
    NgxPaginationModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
    CoreModule,
  ],
  entryComponents: [
    EditviewcommhistoryComponent
  ],
})
export class CommandmanagementModule { }
