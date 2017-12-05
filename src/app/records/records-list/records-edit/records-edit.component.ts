import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormsModule, NgForm} from '@angular/forms';
import { Record } from '../../record.model';
import { RecordService } from '../../record.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-records-edit',
  templateUrl: './records-edit.component.html',
  styleUrls: ['./records-edit.component.css']
})
export class RecordsEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') recordForm: NgForm;
  status = ['Archived', 'Delivered', 'New', 'Working'];
  subscription: Subscription;
  editMode = false;
  editedRecordIndex: number;
  editedRecord: Record;
  constructor(private recordservice: RecordService) {
   }

  ngOnInit() {
    this.subscription = this.recordservice.startedEditing
      .subscribe(
        (index: number) => {
          this.editedRecordIndex = index;
          this.editMode = true;
          this.editedRecord = this.recordservice.getRecord(index);
          this.recordForm.setValue({
            title: this.editedRecord.title,
            division: this.editedRecord.division,
            project_owner: this.editedRecord.project_owner,
            budget: this.editedRecord.budget,
            status: this.editedRecord.status,
            created: this.editedRecord.created.toISOString().slice(0, 10),
            modified: this.editedRecord.modified.toISOString().slice(0, 10)
          });
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newRecord = new Record(value.title, value.division, value.project_owner, value.budget,value.status, value.created, value.modified);
    if (this.editMode) {
      this.recordservice.updateRecord(this.editedRecordIndex, newRecord);
      console.log(newRecord);
    } else {
      console.log(newRecord);
      this.recordservice.addRecord(newRecord);
    }
    this.editMode = false;
    form.reset();
  }
  onClear() {
    this.recordForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.recordservice.deleteRecord(this.editedRecordIndex);
    this.onClear();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
