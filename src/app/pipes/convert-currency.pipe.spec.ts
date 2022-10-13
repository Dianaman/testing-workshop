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
    spyOn(service, 'getConversionGuardada').and.returnValue([{
      casa: { 
        nombre:'Dolar blue',
        venta: '150',
        compra: '140',
        variacion: '0'
      }
    }]);

    let res = pipe.transform(150, 'Pesos', 'Dolar blue');
    expect(res).toEqual(1);
  });

  it('Debe convertir dólares a pesos', () => {
    spyOn(service, 'getConversionGuardada').and.returnValue([{
      casa: { 
        nombre:'Dolar blue',
        venta: '150',
        compra: '140',
        variacion: '0'
      }
    }]);

    let res = pipe.transform(1, 'Dolar blue', 'Pesos');
    expect(res).toEqual(150);
  });

  it('Si no hay valores de cambio, devolver null', () => {
    spyOn(service, 'getConversionGuardada').and.returnValue(null);

    let res = pipe.transform(1, 'dolares', 'pesos');
    expect(res).toEqual(null);
  });

  it('Si los valores de cambio son [], devolver null', () => {
    spyOn(service, 'getConversionGuardada').and.returnValue([]);

    let res = pipe.transform(1, 'dolares', 'pesos');
    expect(res).toEqual(null);
  });

  it('Si el valor de venta es 0, devolver null', () => {
    spyOn(service, 'getConversionGuardada').and.returnValue([{
      casa: { 
        nombre:'Dolar blue',
        venta: '0',
        compra: '0',
        variacion: '0'
      }
    }]);

    let res = pipe.transform(1, 'Dólar blue', 'Pesos');
    expect(res).toEqual(null);
  });
});
