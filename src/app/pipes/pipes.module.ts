import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertCurrencyPipe } from './convert-currency.pipe';

const PIPES = [
  ConvertCurrencyPipe
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [...PIPES ],
  exports: [...PIPES]
})
export class PipesModule {}
