import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductCardComponent } from '@shared/components/product-card/product-card.component';
import { ProductQuantityComponent } from '@shared/components/product-quantity/product-quantity.component';
import { CustomFormsModule } from 'ng2-validation';
import { TableModule } from 'ngx-easy-table';

import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    CustomFormsModule,
    NgbModule,
    AppRoutingModule
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    CommonModule,
    FormsModule,
    TableModule,
    CustomFormsModule,
    NgbModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
