import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../controller/service/employee.service";
import {EtudiantService} from "../../controller/service/etudiant.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  get nombreTotalEmployee(): number {
    return this.employeeService.nombreTotalEmployee;
  }

  set nombreTotalEmployee(value: number) {
    this.employeeService.nombreTotalEmployee = value;
  }

  get nombreTotalEtudiant(): number {
    return this.etudiantService.nombreTotalEtudiant;
  }

  set nombreTotalEtudiant(value: number) {
    this.etudiantService.nombreTotalEtudiant = value;
  }

  constructor(private employeeService:EmployeeService ,
              private etudiantService:EtudiantService
             )
  {

    this.etudiantService.counter().subscribe(
      data => {
        this.nombreTotalEtudiant = data;
        return this.nombreTotalEtudiant
      }
    )

    this.employeeService.counter().subscribe(
      data => {
        this.nombreTotalEmployee = data;
        return this.nombreTotalEmployee
      }
    )


  }

  ngOnInit(): void {
  }
  revenues:number = 11500;
}
