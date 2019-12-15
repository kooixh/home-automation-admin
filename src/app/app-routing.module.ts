import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LightsComponent } from './lights/lights.component';
import { PlugsComponent } from './plugs/plugs.component';




const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'lights', component: LightsComponent },
  { path: 'plugs', component: PlugsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
