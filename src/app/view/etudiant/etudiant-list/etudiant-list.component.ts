import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../../controller/service/employee.service';
import { Employee } from '../../../controller/model/employee.model';
import { EtudiantService } from '../../../controller/service/etudiant.service';
import { Etudiant } from '../../../controller/model/etudiant.model';
import { MenuItem } from 'primeng/api';
import { Dialog } from 'primeng/dialog';
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.scss'],
})
export class EtudiantListComponent implements OnInit {
  isVisible = false;
  temp_var_image = '/assets/logo.png';
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  isVisibleTop = false;
  isVisibleMiddle = false;

  showModalTop(): void {
    this.isVisibleTop = true;
  }

  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }

  handleOkTop(): void {
    console.log('ok');
    this.isVisibleTop = false;
  }

  handleCancelTop(): void {
    this.isVisibleTop = false;
  }

  handleOkMiddle(): void {
    console.log('click ok');
    this.isVisibleMiddle = false;
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }
  @ViewChild(Dialog) dialog!: Dialog;

  toggleDialogBackground() {
    const dialogEl = this.dialog.contentViewChild.nativeElement;
    dialogEl.classList.toggle('custom-dialog');
  }

  visible: boolean;
  value: string;

  showDialog() {
    this.visible = true;
  }
  items: MenuItem[];

  activeItem: MenuItem;

  public findAll(): void {
    this.etudiantService.findAll().subscribe((data) => (this.etudiants = data));
  }

  showModal1(): void {
    this.isVisible = true;
  }

  constructor(
    private etudiantService: EtudiantService,
    private i18n: NzI18nService
  ) {}

  get etudiant(): Etudiant {
    return this.etudiantService.etudiant;
  }

  set etudiant(value: Etudiant) {
    this.etudiantService.etudiant = value;
  }

  get etudiants(): Array<Etudiant> {
    return this.etudiantService.etudiants;
  }

  set etudiants(value: Array<Etudiant>) {
    this.etudiantService.etudiants = value;
  }

  ngOnInit(): void {
    this.i18n.setLocale(en_US);

    this.findAll();
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
      { label: 'Documentation', icon: 'pi pi-fw pi-file' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' },
    ];
    this.activeItem = this.items[0];
  }

  showModal_more_info(): void {
    this.isVisible = true;
  }
}
