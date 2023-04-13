import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './view/body/body.component';
import { SidenavComponent } from './view/navbars/sidenav/sidenav.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ProductsComponent } from './view/Devoir/products.component';
import { StatisticsComponent } from './view/statistics/statistics.component';
import { CoupensComponent } from './view/Abscence/coupens.component';
import { PagesComponent } from './view/list-eleve/pages.component';
import { MediaComponent } from './view/media/media.component';
import { SettingsComponent } from './view/settings/settings.component';
import { HornavComponent } from './view/navbars/hornav/hornav.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    StatisticsComponent,
    CoupensComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    HornavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
