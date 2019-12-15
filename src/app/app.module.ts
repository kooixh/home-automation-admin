import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LightsComponent } from './lights/lights.component';
import { PlugsComponent } from './plugs/plugs.component';
import { LoggingComponent } from './logging/logging.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LightsComponent,
    PlugsComponent,
    LoggingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
