import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Record } from '../../record.model';
import { RecordService } from '../../record.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-record-item',
  templateUrl: './record-item.component.html',
  styleUrls: ['./record-item.component.css']
})
export class RecordItemComponent implements OnInit, OnDestroy {
  @Input() record: Record;
  @Input() index: number;
  subscription: Subscription;

  constructor(private recordService: RecordService) { }

  ngOnInit() {
  }

  getRecordDetail(index) {
    this.subscription = this.recordService.recordChanged
      .subscribe(
        (records: Record[])  => {
          this.record = records[index];
          console.log(this.record);
        }
      );
    this.recordService.getRecordSelected(this.record, this.index);
    console.log(this.index);
  }
  onEditRecord(index: number) {
    this.recordService.startedEditing.next(index);
  }
  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}

