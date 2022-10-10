import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertCurrencyPipe } from './convert-currency.pipe';

const PIPES = [
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [...PIPES, ConvertCurrencyPipe],
  exports: [...PIPES]
})
export class PipesModule {}
