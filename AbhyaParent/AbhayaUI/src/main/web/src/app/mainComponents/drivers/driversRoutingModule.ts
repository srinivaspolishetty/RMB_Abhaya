import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriversComponent } from "./drivers.component";
import { DriverdutyComponent } from "./driverduty/driverduty.component";

const routes: Routes = [
    { path: '', component: DriversComponent, },
    { path: 'driverduty', component: DriverdutyComponent, },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DriversRoutingModule { }
