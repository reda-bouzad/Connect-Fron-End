import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Identified } from '../model/identified.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IdentifiedService {
  private _identified: Identified;
  private _identifieds: Array<Identified>;
  private _url = 'http://localhost:8036/api/v1/identified/';
  public findAll(): Observable<Array<Identified>> {
    return this.httpClient.get<Array<Identified>>(this._url);
  }
  constructor(private _httpClient: HttpClient) {}

  get identified(): Identified {
    if (this.identified == null) {
      return (this._identified = new Identified());
    }
    return this._identified;
  }

  set identified(value: Identified) {
    this._identified = value;
  }

  get identifieds(): Array<Identified> {
    return this._identifieds;
  }

  set identifieds(value: Array<Identified>) {
    this._identifieds = value;
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
