import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './view/body/body.component';
import { SidenavComponent } from './view/navbars/sidenav/sidenav.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { DevoirComponent } from './view/Devoir/devoir.component';
import { StatisticsComponent } from './view/communication/statistics.component';
import { CoupensComponent } from './view/Abscence/coupens.component';
import { EtudiantListComponent } from './view/etudiant/etudiant-list/etudiant-list.component';
import { MediaComponent } from './view/media/media.component';
import { SettingsComponent } from './view/settings/settings.component';
import { HornavComponent } from './view/navbars/hornav/hornav.component';
import { EmployeComponent } from './view/employe/employe.component';
import { EtudiantComponent } from './view/etudiant/etudiant.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { ChartModule } from 'primeng/chart';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { SlideMenuModule } from 'primeng/slidemenu';
import { TabMenuModule } from 'primeng/tabmenu';
import { EtudiantCreateComponent } from './view/etudiant/etudiant-create/etudiant-create.component';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { KeyFilterModule } from 'primeng/keyfilter';
import { CameraComponent } from './view/camera/camera.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    DevoirComponent,
    StatisticsComponent,
    CoupensComponent,
    EtudiantListComponent,
    MediaComponent,
    SettingsComponent,
    HornavComponent,
    EmployeComponent,
    EtudiantComponent,
    EtudiantCreateComponent,
    CameraComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    TabViewModule,
    ChartModule,
    CalendarModule,
    FormsModule,
    SlideMenuModule,
    TabMenuModule,
    DialogModule,
    InputTextModule,
    NzModalModule,
    NzButtonModule,
    DropdownModule,
    FileUploadModule,
    NzUploadModule,
    NzIconModule,
    NzMessageModule,
    KeyFilterModule,
    MessageModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
