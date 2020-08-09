import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from '@shared/components/product-card/product-card.component';
import { ProductQuantityComponent } from '@shared/components/product-quantity/product-quantity.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent
  ]
})
export class SharedModule { }
