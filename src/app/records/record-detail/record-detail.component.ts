import { Component, OnInit, Input} from '@angular/core';
import { Record } from '../record.model';
import { CurrencyPipe } from '@angular/common';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./record-detail.component.css']
})
export class RecordDetailComponent implements OnInit {
  @Input() record: Record;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }
}
