import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../../controller/service/employee.service";
import {Employee} from "../../../controller/model/employee.model";
import {EtudiantService} from "../../../controller/service/etudiant.service";
import {Etudiant} from "../../../controller/model/etudiant.model";

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.scss']
})
export class EtudiantListComponent implements OnInit {

  public findAll():void{
    this.etudiantService.findAll().subscribe(
      data => this.etudiants = data
    );
  }

  constructor(private etudiantService:EtudiantService) { }

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
    this.findAll()
  }

}
