import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiclesComponent } from "./vehicles.component";
import { SuspiciousvehiclesComponent } from "./suspiciousvehicles/suspiciousvehicles.component";

const routes: Routes = [
    { path: '', component: VehiclesComponent, },
    { path: 'suspiciousvehicles', component: SuspiciousvehiclesComponent, }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VehicleRoutingModule { }
