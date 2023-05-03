import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../../controller/service/persons.service';
import { Persons } from '../../controller/model/persons.model';
import { IdentifiedService } from '../../controller/service/identified.service';
import { Identified } from '../../controller/model/identified.model';
import { DetectionService } from '../../controller/service/detection.service';
import { Detection } from '../../controller/model/detection.model';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent implements OnInit {
  public findAll(): void {
    this.personsService.findAll().subscribe((data) => (this.persons = data));
  }

  public findAllIdentified(): void {
    this.identifiedService
      .findAll()
      .subscribe((data) => (this.identifieds = data));
  }

  public findAllDetection(): void {
    this.detectionService
      .findAll()
      .subscribe((data) => (this.detections = data));
  }

  constructor(
    private personsService: PersonsService,
    private identifiedService: IdentifiedService,
    private detectionService: DetectionService
  ) {}
  ngOnInit(): void {
    this.findAll();
    this.findAllIdentified();
    this.findAllDetection();
    console.log();
  }
  get person(): Persons {
    return this.personsService.person;
  }

  set person(value: Persons) {
    this.personsService.person = value;
  }

  get persons(): Array<Persons> {
    return this.personsService.persons;
  }

  set persons(value: Array<Persons>) {
    this.personsService.persons = value;
  }

  get identified(): Identified {
    return this.identifiedService.identified;
  }

  set identified(value: Identified) {
    this.identifiedService.identified = value;
  }

  get identifieds(): Array<Identified> {
    return this.identifiedService.identifieds;
  }

  set identifieds(value: Array<Identified>) {
    this.identifiedService.identifieds = value;
  }

  get detection(): Detection {
    return this.detectionService.detection;
  }

  set detection(value: Detection) {
    this.detectionService.detection = value;
  }

  get detections(): Array<Detection> {
    return this.detectionService.detections;
  }

  set detections(value: Array<Detection>) {
    this.detectionService.detections = value;
  }
}
