import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Conceptos', url: 'conceptos', icon: 'home' },
    { title: 'TDD', url: 'tdd', icon: 'speedometer' },
    { title: 'Testing en Angular', url: 'angular-testing', icon: 'desktop' },
    { title: 'Demo', url: 'demo', icon: 'sparkles' },
    { title: 'Ejercitacion', url: 'ejercitacion', icon: 'skull' },
  ];
  constructor() {}
}
