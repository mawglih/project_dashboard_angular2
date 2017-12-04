import { Component, OnInit, Input} from '@angular/core';
import { Record } from '../record.model';
import { CurrencyPipe } from '@angular/common';
import { RecordService } from '../record.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./record-detail.component.css']
})
export class RecordDetailComponent implements OnInit {
  @Input() record:Record;
  @Input() index:number;

  constructor(private recordService: RecordService) { }
  name = '';
  budget ;
  status = '';
  ngOnInit() {
  }


  onKeyName(event:any) {
    this.name = event.target.value;
  }
  onKeyBudget(event:any) {
    this.budget = event.target.value;
  }
  onKeyStatus(event:any) {
    this.status = event.target.value;
  }
}
