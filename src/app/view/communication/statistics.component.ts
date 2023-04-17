import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  currentDate: Date = new Date();
  formattedDate: string;

  constructor(private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.formattedDate = this.datePipe.transform(this.currentDate, 'EEEE, dd-MM-yyyy');
  }

}
