import { Record } from './record.model';
import { EventEmitter } from '@angular/core';
import * as moment from 'moment';
export class RecordService {
    recordSelected = new EventEmitter<Record>();
    indexSelected = new EventEmitter<Number>();
    index:number;

    private records: Record[] = [
    new Record(
        'Tagtune',
        'Accounting',
        'Kevin Snyder',
        20614.14,
        'archived',
        '09/14/2015',
        '10/02/2015'
      ),
       new Record(
        'Oyoyo',
        'Administration',
        'Eugene Brown',
        22106.44,
        'new',
        '07/17/2015',
        null
      ),
       new Record(
        'Lajo',
        'Marketing',
        'Killgore Trout',
        15481.27,
        'working',
        '07/19/2015',
        '09/17/2015'
      ),
       new Record(
        'Blognation',
        'Administration',
        'Richard Henry',
        24017.98,
        'working',
        '08/03/2015',
        '09/17/2015'
      ),
       new Record(
        'Vinte',
        'Administration',
        'Michelle Webb',
        12935.84,
        'working',
        '08/05/2015',
        '09/15/2015'
      ),
       new Record(
        'Aibox',
        'Administration',
        'Killgore Trout',
        15991.78,
        'working',
        '09/03/2015',
        '10/02/2015'
      ),
       new Record(
        'Buzzdog',
        'Administration',
        'Michelle Webb',
        22610.09,
        'archived',
        '07/26/2015',
        '10/01/2015'
      ),
       new Record(
        'Plambee',
        'Sales',
        'Michelle Webb',
        14229.02,
        'archived',
        '09/14/2015',
        '10/01/2015'
      ),
       new Record(
        'Photobug',
        'Administration',
        'James Holden',
        10959.29,
        'working',
        '09/03/2015',
        '09/18/2015'
      ),
       new Record(
        'Quimm',
        'Marketing',
        'James Holden',
        14139.38,
        'delivered',
        '08/02/2015',
        '09/26/2015'
      ),
       new Record(
        'Innojam',
        'Sales',
        'Eugene Brown',
        24318.05,
        'working',
        '09/13/2015',
        '09/20/2015'
      ),
       new Record(
        'Jaxworks',
        'Production',
        'Michelle Webb',
        15054.27,
        'new',
        '08/12/2015',
        null
      ),
       new Record(
        'Skyble',
        'Accounting',
        'Richard Henry',
        13810.1,
        'delivered',
        '07/12/2015',
        '09/21/2015'
      ),
       new Record(
        'Photobean',
        'Marketing',
        'Michelle Webb',
        12637.95,
        'working',
        '08/24/2015',
        '09/15/2015'
      ),
       new Record(
        'Topicware',
        'Administration',
        'Eugene Brown',
        9667.52,
        'working',
        '08/01/2015',
        '09/29/2015'
      ),
       new Record(
        'Buzzster',
        'Production',
        'Nicole Smith',
        14657.54,
        'working',
        '08/09/2015',
        '09/18/2015'
      ),
       new Record(
        'Twinte',
        'Administration',
        'Kevin Snyder',
        17729.37,
        'delivered',
        '09/09/2015',
        '09/18/2015'
      ),
       new Record(
        'Blognation',
        'Production',
        'Eugene Brown',
        19540.82,
        'archived',
        '07/21/2015',
        '09/22/2015'
      ),
       new Record(
        'Flashdog',
        'Production',
        'Michelle Webb',
        24870.61,
        'working',
        '07/05/2015',
        '10/02/2015'
      ),
       new Record(
        'Yakijo',
        'Accounting',
        'Killgore Trout',
        23533.54,
        'working',
        '08/12/2015',
        '10/01/2015'
      ),
       new Record(
        'Quatz',
        'Sales',
        'Richard Henry',
        23639.65,
        'archived',
        '07/19/2015',
        '09/19/2015'
      ),
       new Record(
        'Dabjam',
        'Marketing',
        'Kevin Snyder',
        14356.55,
        'new',
        '08/22/2015',
        null
      ),
       new Record(
        'Meetz',
        'Sales',
        'Kevin Snyder',
        13882.22,
        'delivered',
        '08/26/2015',
        '10/01/2015'
      ),
       new Record(
        'Flipopia',
        'Marketing',
        'Eugene Brown',
        10306.87,
        'delivered',
        '08/11/2015',
        '09/17/2015'
      ),
       new Record(
        'Quaxo',
        'Administration',
        'Nicole Smith',
        13945.69,
        'archived',
        '07/13/2015',
        '09/21/2015'
      ),
       new Record(
        'Trunyx',
        'Production',
        'Nicole Smith',
        23136.21,
        'delivered',
        '09/03/2015',
        '09/19/2015'
      ),
       new Record(
        'Dabtype',
        'Marketing',
        'Richard Henry',
        22000.98,
        'archived',
        '08/26/2015',
        '09/28/2015'
      ),
       new Record(
        'Meetz',
        'Marketing',
        'Eugene Brown',
        17620.23,
        'new',
        '09/08/2015',
        null
      ),
       new Record(
        'Kimia',
        'Sales',
        'Richard Henry',
        12061.73,
        'archived',
        '08/31/2015',
        '09/29/2015'
      ),
       new Record(
        'Dazzlesphere',
        'Accounting',
        'Eugene Brown',
        21443.97,
        'archived',
        '07/20/2015',
        '10/01/2015'
       )
    ];

    getRecords() {
        return this.records.slice();
    }
    updateDateRange(startDate, endDate) {
        const filteredRecords: Record[] = [];
        for(let m of this.records.slice()) {
            if (!(moment(m.created).isBefore(startDate) && moment(m.created).isAfter(endDate))) {
                filteredRecords.push(m);
            }
        }
        return filteredRecords;
    }

    updateRecord(index: number, newRecord: Record) {
        this.records[index] = newRecord;
    }
    getRecordSelected(record,index) {
        
        this.index = index;
        console.log("from service index: ",this.index);
        this.recordSelected.emit(record);
        this.indexSelected.emit(index);
    }
}