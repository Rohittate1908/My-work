import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custPipe2'
})
export class CustPipe2Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
