import { Pipe, PipeTransform } from '@angular/core';

//Pipe to calculate the difference in days between repo submission date and current date.
@Pipe({
  name: 'dateDiff'
})
export class DateDiffPipe implements PipeTransform {

  transform(value: Date): number {
    let creationDate = new Date(value);
    
    let currentDate = new Date();
    let timeDifference = currentDate.getTime() - creationDate.getTime();
    
      
    let diffInDays = timeDifference/1000/60/60/24;
    return Math.round(diffInDays);
  }

}
