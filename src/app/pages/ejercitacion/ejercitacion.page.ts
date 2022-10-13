import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercitacion',
  templateUrl: './ejercitacion.page.html',
  styleUrls: ['./ejercitacion.page.scss'],
})
export class EjercitacionPage implements OnInit {
  public gastosServiceGastosSubject: string = `private gastos$: BehaviourSubject<Array<Gasto>> = new BehaviourSubject<Array<Gasto>>()`;
  public gastosServiceObtenerGastosDesdeServicio: string = `public obtenerGastosDesdeServicio(): Observable<Array<Gasto>>`;
  public gastosServiceObtenerGastos: string = `public obtenerGastos(): Observable<Array<Gasto>>`;
  public gastosServiceAgregarGasto: string = `public agregarGasto(gasto): Observable<boolean>`;
  public gastosServiceEliminarGasto: string = `public eliminarGasto(id: number): Observable<boolean>`;
  public listadoGastosComponentObtenerGastos: string = `public obtenerGastos(): void`;
  public listadoGastosComponentAgregarGasto: string = `public agregarGasto(): void`;
  public listadoGastosComponentEliminarGasto: string = `public eliminarGasto(id: number): void`;

  constructor() { }

  ngOnInit() { }

}
