import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripComponent } from "./trip.component";
import { TriptrackingComponent } from "./triptracking/triptracking.component";
import { PanicalertsComponent } from "./panicalerts/panicalerts.component";
import { RoutedeviationComponent } from "./routedeviation/routedeviation.component";
import { VideostreamingComponent } from "./videostreaming/videostreaming.component";

const routes: Routes = [
    { path: '', component: TripComponent, },
    { path: 'triptracking', component: TriptrackingComponent, },
    { path: 'panicalerts', component: PanicalertsComponent, },
    { path: 'routedeviation', component: RoutedeviationComponent, },
    { path: 'videostreaming', component: VideostreamingComponent, },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TripRoutingModule { }
