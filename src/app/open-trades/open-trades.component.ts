import { Component, OnInit } from '@angular/core';
import { RECORDS } from '../mock-records';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-open-trades',
  templateUrl: './open-trades.component.html',
  styleUrls: ['./open-trades.component.css']
})
export class OpenTradesComponent implements OnInit {

  records = RECORDS;

  constructor(private recordService: RecordService) {}

  getRecords(): void {
    this.records = this.recordService.getRecords();
  }

  ngOnInit(): void {
    this.getRecords();
  }

}
