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
  }

  public loadList(): void {

  }

  public getListFromStorage(): void {

  }

  public getListFromServer(): void {

  }
}
