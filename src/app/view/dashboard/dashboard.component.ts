import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../controller/service/employee.service";
import {EtudiantService} from "../../controller/service/etudiant.service";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: any;
  options: any;
  revenues:number = 11500;



  constructor(private employeeService:EmployeeService , private etudiantService:EtudiantService) {

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

  get nombreEtudiantFeminin(): number {
    return this.etudiantService.nombreEtudiantFeminin;
  }

  set nombreEtudiantFeminin(value: number) {
    this.etudiantService.nombreEtudiantFeminin = value;
  }

  get nombreEtudiantMasculin(): number {
    return this.etudiantService.nombreEtudiantMasculin;
  }

  set nombreEtudiantMasculin(value: number) {
    this.etudiantService.nombreEtudiantMasculin = value;
  }

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



  ngOnInit() {

    const masculin$ = this.etudiantService.counter_masculin();
    const feminin$ = this.etudiantService.counter_feminin();




    forkJoin([masculin$, feminin$]).subscribe(
      ([masculin, feminin]) => {
        this.nombreEtudiantMasculin = masculin;
        this.nombreEtudiantFeminin = feminin;

        this.data = {
          labels: ['Masculin', 'Feminin'],
          datasets: [
            {
              data: [this.nombreEtudiantMasculin, this.nombreEtudiantFeminin],
              backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500')],
              hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400')]
            }
          ]
        };
      }
    );

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');



    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };
  }




}
