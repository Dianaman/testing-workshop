import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjercitacionPage } from './ejercitacion.page';

const routes: Routes = [
  {
    path: '',
    component: EjercitacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjercitacionPageRoutingModule {}
