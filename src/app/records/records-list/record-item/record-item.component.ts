import { Component, OnInit, Input } from '@angular/core';
import { Record } from '../../record.model';
import { RecordService } from '../../record.service';


@Component({
  selector: 'app-record-item',
  templateUrl: './record-item.component.html',
  styleUrls: ['./record-item.component.css']
})
export class RecordItemComponent implements OnInit {
  @Input() record: Record;
  @Input() index: number;


  constructor(private recordService: RecordService) { }

  ngOnInit() {
    
  }

  getRecordDetail(index) {
    this.recordService.getRecordSelected(this.record, this.index);
    console.log(this.index);
  }

}
