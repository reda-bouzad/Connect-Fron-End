import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../controller/service/employee.service";
import {Employee} from "../../controller/model/employee.model";

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.scss']
})
export class EmployeComponent implements OnInit {

  constructor(private employeeService:EmployeeService) {
    this.employeeService.counter().subscribe(
      data => {
        this.nombreTotalEmployee = data;
        return this.nombreTotalEmployee
      }
    )
  }

  ngOnInit(): void {
    console.log("jackpot 3:"  + this.nombreTotalEmployee)
  }

  get employee(): Employee {
    return this.employeeService.employee;
  }

  set employee(value: Employee) {
    this.employeeService.employee = value;
  }

  get employees(): Array<Employee> {
    return this.employeeService.employees;
  }

  set employees(value: Array<Employee>) {
    this.employeeService.employees = value;
  }

  get nombreTotalEmployee(): number {
    return this.employeeService.nombreTotalEmployee;
  }

  set nombreTotalEmployee(value: number) {
    this.employeeService.nombreTotalEmployee = value;
  }

  public counter(){

  }


}
