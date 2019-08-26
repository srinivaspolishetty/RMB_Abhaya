import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';

const routes: Routes = [
    {
        path: '', component: CoreComponent,
        children: [
            { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
            { path: 'vehicles', loadChildren: '../vehicles/vehicles.module#VehiclesModule' },
            { path: 'drivers', loadChildren: '../drivers/drivers.module#DriversModule' },
            { path: 'trip', loadChildren: '../trip/trip.module#TripModule' },
            { path: 'devices', loadChildren: '../devices/devices.module#DevicesModule' },
            { path: 'reports', loadChildren: '../reports/reports.module#ReportsModule' },
            { path: 'users', loadChildren: '../users/users.module#UsersModule' },
            { path: 'administrativelist', loadChildren: '../admin/admin.module#AdminModule' },
            { path: 'commandmanagement', loadChildren: '../commandmanagement/commandmanagement.module#CommandmanagementModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
