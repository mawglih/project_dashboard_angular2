import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Daterangepicker } from 'ng2-daterangepicker';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecordsComponent } from './records/records.component';
import { RecordsListComponent } from './records/records-list/records-list.component';
import { RecordDetailComponent } from './records/record-detail/record-detail.component';
import { RecordsEditComponent } from './records/records-list/records-edit/records-edit.component';
import { RecordItemComponent } from './records/records-list/record-item/record-item.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SortPipe } from './sort.pipe';
import { SortDatePipe } from './sort-date.pipe';
import { RecordService } from './records/record.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecordsComponent,
    RecordsListComponent,
    RecordDetailComponent,
    RecordItemComponent,
    RecordsEditComponent,
    SortPipe,
    SortDatePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    Daterangepicker
  ],
  providers: [RecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
