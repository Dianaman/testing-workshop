import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {
  /** Convierte un string a formato moneda $56.560,44 */
  transform(value: string, zeroIfEmpty: boolean = true): string {

    return null;
  }

}
