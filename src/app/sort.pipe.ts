import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'sorted'
})
export class SortPipe implements PipeTransform {
    transform(value, keys:string, term:string) {
        return (value || []).filter((item) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
    }
}