import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persons } from '../model/persons.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  private _person: Persons;
  private _persons: Array<Persons>;
  private _url = 'http://localhost:8036/api/v1/persons/';

  public findAll(): Observable<Array<Persons>> {
    return this.httpClient.get<Array<Persons>>(this._url);
  }
  constructor(private _httpClient: HttpClient) {}

  get person(): Persons {
    return this._person;
  }

  set person(value: Persons) {
    this._person = value;
  }

  get persons(): Array<Persons> {
    return this._persons;
  }

  set persons(value: Array<Persons>) {
    this._persons = value;
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
