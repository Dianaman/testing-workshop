import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjercitacionPageRoutingModule } from './ejercitacion-routing.module';

import { EjercitacionPage } from './ejercitacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjercitacionPageRoutingModule
  ],
  declarations: [EjercitacionPage]
})
export class EjercitacionPageModule {}
