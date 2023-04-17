import { Injectable } from '@angular/core';
import {Employee} from "../model/employee.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _employee:Employee;
  private _employees:Array<Employee>;
  private _url = 'http://localhost:8036/api/v1/employe/'
  private _nombreTotalEmployee:number;

  public counter(): Observable<number> {
    return this.httpClient.get<number>(this._url + 'count');
  }


  constructor(private _httpClient:HttpClient) {

  }


  get employee(): Employee {
    return this._employee;
  }

  set employee(value: Employee) {
    this._employee = value;
  }

  get employees(): Array<Employee> {
    return this._employees;
  }

  set employees(value: Array<Employee>) {
    this._employees = value;
  }

  get nombreTotalEmployee(): number {
    return this._nombreTotalEmployee;
  }

  set nombreTotalEmployee(value: number) {
    this._nombreTotalEmployee = value;
  }


  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get httpClient(): HttpClient {
    return this._httpClient;
  }

  set httpClient(value: HttpClient) {
    this._httpClient = value;
  }

}
