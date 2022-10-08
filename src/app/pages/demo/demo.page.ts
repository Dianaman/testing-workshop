import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.page.html',
  styleUrls: ['./demo.page.scss'],
})
export class DemoPage implements OnInit {
  public list: Array<any> = []

  constructor() { }

  ngOnInit() {
    /** 
     * @todo crear funcionalidad que cada x tiempo consulte una api. (dolarsi.com?)
     * Si falla tomar el último valor del dispositivo. 
     * Que haya la posibilidad de forzar la consulta a la api.
     * Realizar conversiones
    */
  }

  public loadList(): void {

  }

  public getListFromStorage(): void {

  }

  public getListFromServer(): void {

  }
}
