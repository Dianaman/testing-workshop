import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatNumberPipe } from 'src/app/pipes/format-number.pipe';

const PIPES = [
  FormatNumberPipe
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [...PIPES],
  exports: [...PIPES]
})
export class PipesModule {}
