import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngularTestingPageRoutingModule } from './angular-testing-routing.module';

import { AngularTestingPage } from './angular-testing.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularTestingPageRoutingModule,
    SwiperModule
  ],
  declarations: [AngularTestingPage]
})
export class AngularTestingPageModule {}
