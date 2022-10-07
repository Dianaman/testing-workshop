import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngularTestingPageRoutingModule } from './angular-testing-routing.module';

import { AngularTestingPage } from './angular-testing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularTestingPageRoutingModule
  ],
  declarations: [AngularTestingPage]
})
export class AngularTestingPageModule {}
