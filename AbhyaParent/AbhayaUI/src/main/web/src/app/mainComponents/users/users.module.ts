import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from "../core/core.module";
import { NgxPaginationModule } from 'ngx-pagination';

import { UsersComponent } from './users.component';
import { UsersRoutingModule } from "./usersRoutingModule";
import { UserComponent } from "./modalpopup/user/user.component";

@NgModule({
  declarations: [UsersComponent, UserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NgxPaginationModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    NgbModule,
    CoreModule
  ],
  entryComponents : [
    UserComponent
  ],
})
export class UsersModule { }
