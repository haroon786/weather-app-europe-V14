import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'localizedDate',
  pure: false,
  standalone:true
})
export class LocalizedDatePipe implements PipeTransform {
  constructor(private translateService: TranslateService) {
    console.log("pipe filter")
  }

 public transform(value: any, pattern: string = 'fullDate'): any {
    const datePipe: any = new DatePipe(this.translateService.currentLang);
    return datePipe.transform(value, pattern);
  }
}
