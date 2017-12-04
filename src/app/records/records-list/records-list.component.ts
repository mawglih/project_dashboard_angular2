import { Component, OnInit, ViewChild } from '@angular/core';
import { Record } from '../record.model';
import { RecordService } from '../record.service';
import { FormGroup, FormControl} from '@angular/forms';
import { Daterangepicker,DaterangepickerConfig, DaterangePickerComponent } from 'ng2-daterangepicker';

import * as moment from 'moment';

@Component({
  selector: 'app-records-list',
  templateUrl: './records-list.component.html',
  styleUrls: ['./records-list.component.css']
})

export class RecordsListComponent implements OnInit {
  @ViewChild(DaterangePickerComponent)
  private picker: DaterangePickerComponent;
  public dateInputs: any = [
    {
        start: moment().subtract(12, 'month'),
        end: moment().subtract(6, 'month')
    },
    {
        start: moment().subtract(9, 'month'),
        end: moment().subtract(6, 'month')
    },
    {
        start: moment().subtract(4, 'month'),
        end: moment()
    },
    {
        start: moment(),
        end: moment().add(5, 'month'),
    }
];

public mainInput = {
    start: moment().subtract(12, 'month'),
    end: moment().subtract(6, 'month')
}



public singleDate: any;

public eventLog = '';
  records: Record[];
  selectDivisionForm: FormGroup;
  divisions = ['Accounting', 'Administration', 'Marketing', 'Sales', 'Production']

  constructor(private recordService: RecordService,
    private daterangepickerOptions: DaterangepickerConfig) {
      this.daterangepickerOptions.settings = {
        locale: { format: 'YYYY-MM-DD' },
        alwaysShowCalendars: false,
        ranges: {
           'Last Month': [moment().subtract(1, 'month'), moment()],
           'Last 3 Months': [moment().subtract(4, 'month'), moment()],
           'Last 6 Months': [moment().subtract(6, 'month'), moment()],
           'Last 12 Months': [moment().subtract(12, 'month'), moment()],
        }
    };
    
     this.singleDate = Date.now();
     }

  ngOnInit() {
    this.records = this.recordService.getRecords();
  }
    private selectedDate(value: any, dateInput: any) {
      dateInput.start = value.start;
      dateInput.end = value.end;
      
      let startDate = dateInput.start.toDate();
      let endDate = dateInput.end.toDate();
  
  }

  private applyDate(value: any, dateInput: any) {
      dateInput.start = value.start;
      dateInput.end = value.end;
  }

  public calendarEventsHandler(e:any) {
      
      this.eventLog += '\nEvent Fired: ' + e.event.type;
  }
  
  

}
