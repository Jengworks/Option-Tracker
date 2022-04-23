import { Injectable } from '@angular/core';

import { Record } from './Record';
import { RECORDS } from './mock-records';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor() { }

  getRecords(): Record[] {

    let records = [];

    for(let record of RECORDS){
      if(!record.completed)
        records.push(record)
    }
    return records;
  }
}
