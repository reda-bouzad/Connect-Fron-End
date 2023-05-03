import { Component, OnInit } from '@angular/core';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { EtudiantService } from '../../../controller/service/etudiant.service';
import { Etudiant } from '../../../controller/model/etudiant.model';
import { EtudiantListComponent } from '../etudiant-list/etudiant-list.component';

@Component({
  selector: 'app-etudiant-create',
  templateUrl: './etudiant-create.component.html',
  styleUrls: ['./etudiant-create.component.scss'],
})
export class EtudiantCreateComponent implements OnInit {
  countries: any[];
  selectedCountry: string;
  numeroEtudiant: string = '';
  nomEtudiant: string;
  prenomEtudiant: string;
  public save(): void {
    this.etudiantService.save().subscribe((data) => {
      if (data != null) {
        this.etudiant;
      }
    });
  }

  value: number;
  date: Date;
  constructor(
    private msg: NzMessageService,
    private etudiantService: EtudiantService,
    private etudiantListComponent: EtudiantListComponent
  ) {}

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }
  ngOnInit(): void {
    this.countries = [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' },
    ];
  }

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
}
