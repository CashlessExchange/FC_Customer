import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CardnumberPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'cardSecret',
})
export class CardnumberPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {

    let secret = "*******";
    let endcard= value.length;
    return secret+value.substring(endcard-4,endcard);
  }
}
