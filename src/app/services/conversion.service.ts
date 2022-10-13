import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Conversion } from '../models/conversion';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {
  private api: string = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';
  private datosConversion$: BehaviorSubject<Array<Conversion>> = new BehaviorSubject<Array<Conversion>>(null);
  private fechaUltimaActualizacion$: BehaviorSubject<Date> = new BehaviorSubject<Date>(null);
  private readonly aMinutos: number = 60 * 1000;
  private tiempoRefresco: number = 5 * this.aMinutos; // tiempo en minutos
  private timer;

  constructor(private http: HttpClient) { }

  public initTimer(): void {
    const proximaActualizacion = this.proximaActualizacion();
    if (proximaActualizacion <= 0) {
      this.fetchConversion();
      this.setTimer();
    } else if (!this.timer) {
      setTimeout(() => {
        this.setTimer();
      }, proximaActualizacion);
    }
  }

  private setTimer(): void {
    this.timer = setInterval(() => {
      this.fetchConversion();
    }, this.tiempoRefresco);     
  }

  private proximaActualizacion(): number {
    const sinDatos = !this.datosConversion$.value || !this.fechaUltimaActualizacion$.value;
    if (sinDatos) return 0;
    const fechaActualizacionRequerida = this.fechaUltimaActualizacion$.value.valueOf() + this.tiempoRefresco;
    const fechaActual = new Date().valueOf();
    return fechaActualizacionRequerida - fechaActual;
  }

  public getConversionGuardada(): Array<Conversion> {
    return this.datosConversion$.value;
  }

  public getConversion(): Observable<Array<Conversion>> {
    return this.datosConversion$.asObservable();
  }

  private fetchConversion(): void {
    this.http.get(this.api).pipe(take(1)).subscribe((data: any) => {
      console.log(data);
      this.datosConversion$.next(data);
      this.fechaUltimaActualizacion$.next(new Date());
    }, () => {});
  }

  public actualizarDatos(): void {
    this.clearTimer();
    this.fetchConversion();
    this.setTimer();
  }

  public getFechaUltimaActualizacion(): Observable<Date> {
    return this.fechaUltimaActualizacion$.asObservable();
  }

  public clearTimer() {
    clearInterval(this.timer);
  }
}

