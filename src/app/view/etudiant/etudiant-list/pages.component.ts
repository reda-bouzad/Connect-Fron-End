import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../../controller/service/employee.service";
import {Employee} from "../../../controller/model/employee.model";

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  public findAll():void{
    this.employeService.findAll().subscribe(
      data => this.employees = data
    );
  }

  constructor(private employeService:EmployeeService) { }

  get employee(): Employee {
    return this.employeService.employee;
  }

  set employee(value: Employee) {
    this.employeService.employee = value;
  }

  get employees(): Array<Employee> {
    return this.employeService.employees;
  }

  set employees(value: Array<Employee>) {
    this.employeService.employees = value;
  }

  ngOnInit(): void {
    this.findAll()
  }

}
