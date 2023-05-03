import { Injectable } from '@angular/core';
import { Detection } from '../model/detection.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetectionService {
  private _detection: Detection;
  private _detections: Array<Detection>;
  private _url = 'http://localhost:8036/api/v1/detection/';
  public findAll(): Observable<Array<Detection>> {
    return this.httpClient.get<Array<Detection>>(this._url);
  }

  constructor(private httpClient: HttpClient) {}

  get detection(): Detection {
    if (this.detection == null) {
      return (this.detection = new Detection());
    }
    return this._detection;
  }

  set detection(value: Detection) {
    this._detection = value;
  }

  get detections(): Array<Detection> {
    return this._detections;
  }

  set detections(value: Array<Detection>) {
    this._detections = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
