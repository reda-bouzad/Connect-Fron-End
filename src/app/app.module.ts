import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './view/body/body.component';
import { SidenavComponent } from './view/navbars/sidenav/sidenav.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ProductsComponent } from './view/Devoir/products.component';
import { StatisticsComponent } from './view/communication/statistics.component';
import { CoupensComponent } from './view/Abscence/coupens.component';
import { PagesComponent } from './view/etudiant/etudiant-list/pages.component';
import { MediaComponent } from './view/media/media.component';
import { SettingsComponent } from './view/settings/settings.component';
import { HornavComponent } from './view/navbars/hornav/hornav.component';
import { EmployeComponent } from './view/employe/employe.component';
import { EtudiantComponent } from './view/etudiant/etudiant.component';

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
    HornavComponent,
    EmployeComponent,
    EtudiantComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
