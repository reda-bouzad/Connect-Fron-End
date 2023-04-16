import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoupensComponent } from './view/Abscence/coupens.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { MediaComponent } from './view/media/media.component';
import { PagesComponent } from './view/etudiant/etudiant-list/pages.component';
import { ProductsComponent } from './view/Devoir/products.component';
import { SettingsComponent } from './view/settings/settings.component';
import { StatisticsComponent } from './view/communication/statistics.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'Devoir', component: ProductsComponent},
  {path: 'communication', component: StatisticsComponent},
  {path: 'Abscence', component: CoupensComponent},
  {path: 'etudiant-list', component: PagesComponent},
  {path: 'media', component: MediaComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
