import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrativelistComponent } from "./administrativelist/administrativelist.component";
import { ProdtestComponent } from "./prodtest/prodtest.component";
import { ConfigurationComponent } from "./configuration/configuration.component";

const routes: Routes = [
    { path: '', component: AdministrativelistComponent, },
    { path: 'prodtest', component: ProdtestComponent, },
    { path: 'configuration', component: ConfigurationComponent, }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
