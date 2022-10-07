import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Introducción', url: '', icon: 'home' },
    { title: 'TDD', url: 'tdd', icon: 'home' },
    { title: 'Testing en Angular', url: 'angular-testing', icon: 'home' },
    { title: 'Demo', url: 'demo', icon: 'home' },
  ];
  constructor() {}
}
