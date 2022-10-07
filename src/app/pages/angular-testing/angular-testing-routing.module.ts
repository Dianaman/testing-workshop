import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularTestingPage } from './angular-testing.page';

const routes: Routes = [
  {
    path: '',
    component: AngularTestingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularTestingPageRoutingModule {}
