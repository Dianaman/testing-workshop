import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ConversionService } from '../services/conversion.service';
import { ConvertCurrencyPipe } from './convert-currency.pipe';

describe('ConvertCurrencyPipe', () => {
  let service: ConversionService;
  let pipe: ConvertCurrencyPipe;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConversionService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ConversionService);
    pipe = new ConvertCurrencyPipe(service);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Debe convertir pesos a dólares', () => {
    /** Preparación datos de entrada */
    const monto = 150;
    spyOn(service, 'getConversionGuardada').and.returnValue([{
      casa: { 
        nombre:'Dolar blue',
        venta: '150',
        compra: '140',
        variacion: '0'
      }
    }]);

    /** Ejecución del test */
    let res = pipe.transform(monto, 'Pesos', 'Dolar blue');

    /** Comprobación del test */
    expect(res).toEqual(1);
  });

  it('Debe convertir dólares a pesos', () => {
    /** Preparación datos de entrada */
    const monto = 1;
    spyOn(service, 'getConversionGuardada').and.returnValue([{
      casa: { 
        nombre:'Dolar blue',
        venta: '150',
        compra: '140',
        variacion: '0'
      }
    }]);

    /** Ejecución del test */
    let res = pipe.transform(monto, 'Dolar blue', 'Pesos');
    
    /** Comprobación del test */
    expect(res).toEqual(150);
  });

  it('Si no hay valores de cambio, devolver null', () => {
    /** Preparación datos de entrada */
    const monto = 1;
    spyOn(service, 'getConversionGuardada').and.returnValue(null);

    /** Ejecución del test */
    let res = pipe.transform(monto, 'dolares', 'pesos');

    /** Comprobación del test */
    expect(res).toEqual(null);
  });

  it('Si los valores de cambio son [], devolver null', () => {
    /** Preparación datos de entrada */
    const monto = 1;
    spyOn(service, 'getConversionGuardada').and.returnValue([]);

    /** Ejecución del test */
    let res = pipe.transform(monto, 'dolares', 'pesos');

    /** Comprobación del test */
    expect(res).toEqual(null);
  });

  it('Si el valor de venta es 0, devolver null', () => {
    /** Preparación datos de entrada */
    const monto = 1;
    spyOn(service, 'getConversionGuardada').and.returnValue([{
      casa: { 
        nombre:'Dolar blue',
        venta: '0',
        compra: '0',
        variacion: '0'
      }
    }]);

    /** Ejecución del test */
    let res = pipe.transform(monto, 'Dólar blue', 'Pesos');

    /** Comprobación del test */
    expect(res).toEqual(null);
  });
});
