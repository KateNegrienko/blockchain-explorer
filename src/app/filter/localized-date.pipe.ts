import { DatePipe, registerLocaleData } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

import { LOCALE_ID } from '@angular/core';

@Pipe({
  name: 'transformDate',
  pure: false
})
export class TransformDatePipe implements PipeTransform {

  constructor() {
  }

  transform(value: any, pattern: string = 'mediumDate'): any {
    const datePipe: DatePipe = new DatePipe('en-US');
    const date = new Date(value * 1000);
    return datePipe.transform(date, pattern);
  }
}
