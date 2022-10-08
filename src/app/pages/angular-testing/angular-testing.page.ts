import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-testing',
  templateUrl: './angular-testing.page.html',
  styleUrls: ['./angular-testing.page.scss'],
})
export class AngularTestingPage implements OnInit {

  public describeCode: string = `describe('Descripción del grupo', () => {})`;
  public fdescribeCode: string = `fdescribe('Descripción del grupo', () => {})`;
  public xdescribeCode: string = `xdescribe('Descripción del grupo', () => {})`;
  public itCode: string = `it('Descripción del test', () => {}, timeout?)`;
  public fitCode: string = `fit('Descripción del test', () => {}, timeout?)`;
  public xitCode: string = `xit('Descripción del test', () => {}, timeout?)`;
  public beforeAllCode: string = `beforeAll(funcion?, timeout?)`;
  public beforeEachCode: string = `beforeEach(funcion?, timeout?)`;
  public afterAllCode: string = `afterAll(funcion?, timeout?)`;
  public afterEachCode: string = `afterEach(funcion?, timeout?)`;
  public spyOnCode: string = `spyOn(obj, nombreDelMetodo): Spy`;
  public spyOnPropertyCode: string = `spyOnProperty(objeto, nombreDeLaPropiedad, getOSet?): Spy`;
  public expectCode: string = `expect(valorActual: any): Matchers`;
  public expectAsyncCode: string = `expect(valorActual: any): AsyncMatchers`;

  public spyClass: string = `
  class Spy {
    public and: SpyStrategy; // estrategia por defecto

    public withArgs(...args): SpyStrategy; // estrategia específica  
  }
  
  class SpyStrategy {
    public callFake(funcion): void // Le indica al spy que llame a la implementación falsa pasada por parámetro cuando se invoque
    public callThrough(): void // Le indica al spy que llame a la implementación real cuando se invoque
    public exec(): void // Se ejecuta el spyStrategy
    public rejectWith(valor: any): void // Le indica al spy que rechace la promesa con el valor indicado cuando se invoque
    public resolveTo(valor: any): void // Le indica al spy que resuelva la promesa con el valor indicado cuando se invoque
    public returnValue(valor: any): void // Le indica al spy que retorne el valor indicado cuando se invoque
    public returnValues(…valores: Array<any>): void // Le indica al spy que retorne uno de los valores especificados de manera secuencial cada vez que se invoque
    public stub(): void // Le indica al spy que no haga nada cuando se invoque (por defecto)
    public throwError(algo: Error | object | string): void // Le indica al spy que arroje el error indicado indicado cuando se invoque
  }
  `;

  public matcherClass: string = `
  class Matcher {
    public not: Matcher; // Invierte el valor del segundo valor

    public toBe(valorEsperado: object); // Compara con === el valor valor y valor esperado
    public toBeNull(); // Compara el valor actual con null
    public toBeTrue(); // Compara el valor actual con true
    public toBeTruthy(); // Compara si valor actual el un valor verdadero
    public toContain(valorEsperado: object); // Se fija si el valor actual contiene al valor esperado
    public toEqual(valorEsperado: object); // Se fija si el valor actual equivale al valor esperado utilizando comparación profunda
    public toHaveBeenCalled(); // Se fija si el valor actual (spy) fue invocado
  }
  `;

  public testBedClass: string = `
  class TestBed {
    public static configureTestingModule(moduleDef: TestModuleMetadata): TestBed;

    public static inject<T>(token: ProviderToken<T>, notFoundValue?: T, flags?: InjectFlags): T;
  }
  `;

  constructor() { }

  ngOnInit() {
  }

}
