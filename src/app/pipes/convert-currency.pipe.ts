import { Pipe, PipeTransform } from '@angular/core';
import { ConversionService } from '../services/conversion.service';

@Pipe({
  name: 'convertCurrency'
})
export class ConvertCurrencyPipe implements PipeTransform {
  constructor(private conversionService: ConversionService) {}

  transform(monto: number, monedaActual: string, monedaAConvertir: string): number {
    const valores = this.conversionService.getConversionGuardada();
    monedaActual = monedaActual?.toLowerCase();
    monedaAConvertir = monedaAConvertir?.toLowerCase();

    if (valores?.length) {
      let valorDeVenta = '';
      if (monedaActual === 'pesos') {
        valorDeVenta = valores.find(cambio => {
          return cambio?.casa?.nombre.toLowerCase() === monedaAConvertir;
        })?.casa?.venta ?? '';
        return valorDeVenta ? monto /  parseFloat(valorDeVenta.replace(/,/g, '.')) : null;
      } else {
        valorDeVenta = valores.find(cambio => {
          return cambio?.casa?.nombre.toLowerCase() === monedaActual;
        })?.casa?.venta ?? '';
        return valorDeVenta ? monto *  parseFloat(valorDeVenta.replace(/,/g, '.')) : null;
      }
    } else {
      return null;
    }
  }

}
