import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortdate'
})
export class SortDatePipe implements PipeTransform {
    transform(value:any, startDate:any, endDate: any) {
        return (value || []).filter((item) => {
            if(item.created >=startDate && item.created <=endDate) {
                return item;
            }
        })
    }
}