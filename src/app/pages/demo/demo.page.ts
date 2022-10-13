import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ConversionService } from 'src/app/services/conversion.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.page.html',
  styleUrls: ['./demo.page.scss'],
})
export class DemoPage implements OnInit {
  public datos$: Observable<Array<any>>;
  public ultimaActualizacion$: Observable<Date>;
  public tiposDeCambios: Array<String> = ['pesos', 'dolar blue', 'dolar oficial'];
  public formCambio: FormGroup;

  public get monto() { return this.formCambio?.get('monto')?.value; }
  public get monedaActual() { return this.formCambio?.get('monedaActual')?.value; }
  public get monedaAConvertir() { return this.formCambio?.get('monedaAConvertir')?.value; }

  constructor(private conversionService: ConversionService) { }

  ngOnInit() {
    this.formCambio = new FormGroup({
      monto: new FormControl(1, [Validators.required]),
      monedaActual: new FormControl('pesos', [Validators.required]),
      monedaAConvertir: new FormControl('dolar blue', [Validators.required]),
    })
    this.loadList();
  }

  public loadList(): void {
    this.datos$ = this.conversionService.getConversion();
    this.ultimaActualizacion$ = this.conversionService.getFechaUltimaActualizacion();
    this.conversionService.initTimer();
  }
}
