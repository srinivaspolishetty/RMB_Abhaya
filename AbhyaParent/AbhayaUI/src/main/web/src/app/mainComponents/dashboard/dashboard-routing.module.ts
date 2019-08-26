import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MapviewComponent } from './mapview/mapview.component';
import { PolicedashboardComponent } from "../dashboard/policedashboard/policedashboard.component";

const routes: Routes = [
    { path: '', component: DashboardComponent, },
    { path: 'mapview', component: MapviewComponent, },
    { path: 'policedashboard', component: PolicedashboardComponent, }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
