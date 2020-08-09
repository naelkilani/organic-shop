import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { Product } from '../shared/models/product';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
  @Input('product') product: Product;
  @Input('cart') cart: Cart;

  constructor(private cartService: CartService) { }

  addToCart(): void {
    this.cartService.addToCart(this.product);
  }

  removeFromCart(): void {
    this.cartService.removeFromCart(this.product);
  }
}
