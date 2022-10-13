import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConversionService } from './conversion.service';

describe('ConversionService', () => {
  let service: ConversionService;
  const startingTime = new Date();
  const aMinutos: number = 1000 * 60;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ConversionService);

    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(startingTime));
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('Llamar a la api si no hay fecha de última actualización', () => {
    /** Preparación datos de entrada */
    const method = spyOn<any>(service, 'fetchConversion');

    service['fechaUltimaActualizacion$'].next(null);
    service['tiempoRefresco'] = aMinutos * 5;
    service['datosConversion$'].next([]);

    /** Ejecución del test */
    service.initTimer();

    /** Comprobación del test */
    expect(method).toHaveBeenCalled();
  });

  it('Llamar a la api si pasó más tiempo que el tiempo de refresco', () => {
    /** Preparación datos de entrada */
    const method = spyOn<any>(service, 'fetchConversion');

    jasmine.clock().mockDate(new Date(startingTime.valueOf() + (aMinutos * 6)));

    service['fechaUltimaActualizacion$'].next(startingTime);
    service['tiempoRefresco'] = aMinutos * 5;
    service['datosConversion$'].next([]);

    /** Ejecución del test */
    service.initTimer();

    /** Comprobación del test */
    expect(method).toHaveBeenCalled();
  });

  it('Llamar a la api si no hay datos guardados', () => {
    /** Preparación datos de entrada */
    const method = spyOn<any>(service, 'fetchConversion');

    jasmine.clock().mockDate(new Date(startingTime.valueOf() + (aMinutos * 4)));
    
    service['fechaUltimaActualizacion$'].next(startingTime);
    service['tiempoRefresco'] = aMinutos * 5;
    service['datosConversion$'].next(null);

    /** Ejecución del test */
    service.initTimer();

    /** Comprobación del test */
    expect(method).toHaveBeenCalled();
  });

  it('Traer los datos guardados si pasó menos tiempo que el tiempo de refresco', () => {
    /** Preparación datos de entrada */
    const method = spyOn<any>(service, 'fetchConversion');

    jasmine.clock().mockDate(new Date(startingTime.valueOf() + (aMinutos * 4)));
    
    service['fechaUltimaActualizacion$'].next(startingTime);
    service['tiempoRefresco'] = aMinutos * 5;
    service['datosConversion$'].next([]);

    /** Ejecución del test */
    service.initTimer();

    /** Comprobación del test */
    expect(method).not.toHaveBeenCalled();
  });

  it('Traer los datos guardados si la llamada a la api falla', () => {
    /** Preparación datos de entrada */
    const method = spyOn<any>(service, 'fetchConversion').and.rejectWith(null);

    jasmine.clock().mockDate(new Date(startingTime.valueOf() + (aMinutos * 6)));
    
    service['fechaUltimaActualizacion$'].next(startingTime);
    service['tiempoRefresco'] = aMinutos * 5;
    service['datosConversion$'].next([]);

    /** Ejecución del test */
    service.initTimer();

    /** Comprobación del test */
    expect(method).toHaveBeenCalled();
    expect(service['datosConversion$'].value).toEqual([]);
  });

  it('Forzar la llamada de la api aunque no cumpla requerimientos', () => {
    /** Preparación datos de entrada */
    const method = spyOn<any>(service, 'fetchConversion');

    jasmine.clock().mockDate(new Date(startingTime.valueOf() + (aMinutos * 6)));
    
    service['fechaUltimaActualizacion$'].next(startingTime);
    service['tiempoRefresco'] = aMinutos * 5;
    service['datosConversion$'].next([]);

    /** Ejecución del test */
    service.actualizarDatos();

    /** Comprobación del test */
    expect(method).toHaveBeenCalled();
    expect(service['datosConversion$'].value).toEqual([]);
  });
});
