import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiamondComponent } from './diamond/diamond.component';
import { ArrowComponent } from './arrow/arrow.component';

const COMPONENTS = [
    DiamondComponent,
    ArrowComponent
]

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class ComponentsModule {}
