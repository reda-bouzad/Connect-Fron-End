import { Injectable } from '@angular/core';
import {Etudiant} from "../model/etudiant.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private _etudiant:Etudiant;
  private _etudiants:Array<Etudiant>;
  private _nombreTotalEtudiant:number;
  private _url = 'http://localhost:8036/api/v1/etudiant'

  public counter(): Observable<number> {
    return this._httpClient.get<number>(this._url + '/count');
  }

  constructor(private _httpClient:HttpClient) {

  }

  get etudiant(): Etudiant {
    return this._etudiant;
  }

  set etudiant(value: Etudiant) {
    this._etudiant = value;
  }

  get etudiants(): Array<Etudiant> {
    return this._etudiants;
  }

  set etudiants(value: Array<Etudiant>) {
    this._etudiants = value;
  }

  get nombreTotalEtudiant(): number {
    return this._nombreTotalEtudiant;
  }

  set nombreTotalEtudiant(value: number) {
    this._nombreTotalEtudiant = value;
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
