import { Component, OnInit } from '@angular/core';
import { RecordService } from './record.service';
import { Record } from './record.model';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css'],
  
})
export class RecordsComponent implements OnInit {
  selectedRecord: Record;
  constructor(private recordService: RecordService) { }

  ngOnInit() {
    this.recordService.recordSelected
      .subscribe(
        (record: Record) => {
          this.selectedRecord = record;
        }
      );
  }

}
