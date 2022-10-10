import { TestBed } from '@angular/core/testing';

import { ConversionService } from './conversion.service';

describe('ConversionService', () => {
  let service: ConversionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('Llamar a la api si no hay fecha de última actualización', () => {

  });

  it('Llamar a la api si pasó más tiempo que el tiempo de refresco', () => {

  });

  it('Llamar a la api si no hay datos guardados', () => {

  });

  it('Traer los datos guardados si pasó menos tiempo que el tiempo de refresco', () => {

  });

  it('Traer los datos guardados si no hay conexión a internet', () => {

  });
});
