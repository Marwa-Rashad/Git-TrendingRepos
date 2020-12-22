import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDiff'
})
export class DateDiffPipe implements PipeTransform {

  transform(value: Date): number {
    let creationDate = new Date(value);
    
    let currentDate = new Date();
    let timeDifference = creationDate.getTime() - currentDate.getTime();
    
      
    let diffInDays = timeDifference/1000/60/60/24;
    return Math.round(diffInDays);
  }

}
