import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConversionService } from './conversion.service';

describe('ConversionService', () => {
  let service: ConversionService;
  const startingTime = new Date();

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
    const method = spyOn<any>(service, 'fetchConversion');

    service['fechaUltimaActualizacion$'].next(null);
    service['tiempoRefresco'] = 1000 * 60 * 5; // 5 minutos
    service['datosConversion$'].next([]);
    service.initTimer();

    expect(method).toHaveBeenCalled();
  });

  it('Llamar a la api si pasó más tiempo que el tiempo de refresco', () => {
    const method = spyOn<any>(service, 'fetchConversion');

    jasmine.clock().mockDate(new Date(startingTime.valueOf() + (1000 * 60 * 6)));

    service['fechaUltimaActualizacion$'].next(startingTime);
    service['tiempoRefresco'] = 1000 * 60 * 5; // 5 minutos
    service['datosConversion$'].next([]);

    service.initTimer();

    expect(method).toHaveBeenCalled();
  });

  it('Llamar a la api si no hay datos guardados', () => {
    const method = spyOn<any>(service, 'fetchConversion');

    jasmine.clock().mockDate(new Date(startingTime.valueOf() + (1000 * 60 * 4)));
    
    service['fechaUltimaActualizacion$'].next(startingTime);
    service['tiempoRefresco'] = 1000 * 60 * 5; // 5 minutos
    service['datosConversion$'].next(null);

    service.initTimer();

    expect(method).toHaveBeenCalled();
  });

  it('Traer los datos guardados si pasó menos tiempo que el tiempo de refresco', () => {
    const method = spyOn<any>(service, 'fetchConversion');

    jasmine.clock().mockDate(new Date(startingTime.valueOf() + (1000 * 60 * 4)));
    
    service['fechaUltimaActualizacion$'].next(startingTime);
    service['tiempoRefresco'] = 1000 * 60 * 5; // 5 minutos
    service['datosConversion$'].next([]);

    service.initTimer();

    expect(method).not.toHaveBeenCalled();

  });

  it('Traer los datos guardados si la llamada a la api falla', () => {
    const method = spyOn<any>(service, 'fetchConversion').and.rejectWith(null);

    jasmine.clock().mockDate(new Date(startingTime.valueOf() + (1000 * 60 * 6)));
    
    service['fechaUltimaActualizacion$'].next(startingTime);
    service['tiempoRefresco'] = 1000 * 60 * 5; // 5 minutos
    service['datosConversion$'].next([]);

    service.initTimer();

    expect(method).toHaveBeenCalled();
    expect(service['datosConversion$'].value).toEqual([]);
  });

  it('Forzar la llamada de la api aunque no cumpla requerimientos', () => {
    const method = spyOn<any>(service, 'fetchConversion').and.rejectWith(null);

    jasmine.clock().mockDate(new Date(startingTime.valueOf() + (1000 * 60 * 6)));
    
    service['fechaUltimaActualizacion$'].next(startingTime);
    service['tiempoRefresco'] = 1000 * 60 * 5; // 6 minutos
    service['datosConversion$'].next([]);

    service.actualizarDatos();
    expect(method).toHaveBeenCalled();
    expect(service['datosConversion$'].value).toEqual([]);
  });
});
