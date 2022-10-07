import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TddPageRoutingModule } from './tdd-routing.module';

import { TddPage } from './tdd.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TddPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TddPage]
})
export class TddPageModule {}
