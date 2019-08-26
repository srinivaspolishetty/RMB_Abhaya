import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandexecuteComponent } from './commandexecute/commandexecute.component';
import { CommandhistoryComponent } from './commandhistory/commandhistory.component';

const appRoutes: Routes = [
    { path: 'commandexecute', component: CommandexecuteComponent },
    { path: 'commandhistory', component: CommandhistoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class CommandManagementRoutingModule { }