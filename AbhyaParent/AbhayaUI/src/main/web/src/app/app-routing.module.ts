import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./mainComponents/login/login.component";

const appRoutes: Routes = [
  {path: '', component: LoginComponent, data: {message: 'Login Page'}},
  {path: 'login', component: LoginComponent, data: {message: 'Login Page'}},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
