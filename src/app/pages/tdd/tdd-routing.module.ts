import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TddPage } from './tdd.page';

const routes: Routes = [
  {
    path: '',
    component: TddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TddPageRoutingModule {}
