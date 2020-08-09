import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from './../environments/environment';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductsFilterComponent } from './products/products-filter/products-filter.component';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from './shared/shared.module';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    NavbarComponent,
    ProductsComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    LoginComponent,
    ProductsFilterComponent,
    ShippingFormComponent,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule,
    FormsModule,
    SharedModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
