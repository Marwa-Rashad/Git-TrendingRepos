import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toKilo'
})
export class ToKiloPipe implements PipeTransform {

  transform(value: number): number {
    return value/1000;
  }

}
