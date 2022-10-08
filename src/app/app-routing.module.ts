import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'conceptos',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'demo',
    loadChildren: () => import('./pages/demo/demo.module').then( m => m.DemoPageModule)
  },
  {
    path: 'angular-testing',
    loadChildren: () => import('./pages/angular-testing/angular-testing.module').then( m => m.AngularTestingPageModule)
  },
  {
    path: 'tdd',
    loadChildren: () => import('./pages/tdd/tdd.module').then( m => m.TddPageModule)
  },
  {
    path: 'ejercitacion',
    loadChildren: () => import('./pages/ejercitacion/ejercitacion.module').then( m => m.EjercitacionPageModule)
  },
  {
    path: '**',
    redirectTo: 'conceptos'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
