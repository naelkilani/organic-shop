import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { OrderService } from './../order.service';
import { map } from 'rxjs/operators';
import { Cart } from './../models/cart';
import { CartService } from './../cart.service';
import { Order } from './../models/order';
import { Shipping } from './../models/shipping';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import * as firebase from 'firebase';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  public shipping: Shipping = {} as Shipping;

  private cart: Cart;
  private user: firebase.User;
  private cartSubscription: Subscription;
  private userSubscription: Subscription;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.userSubscription = this.authService.user$.subscribe(u => this.user = u);

    this.cartSubscription = (await this.cartService.getCart())
    .snapshotChanges()
    .pipe(map(sc => new Cart(sc.key, sc.payload.val().cartLines, sc.payload.val().createdOn)))
    .subscribe(c => this.cart = c);
  }

  async placeOrder() : Promise<void> {
    let order = new Order(this.cart, this.shipping, this.user.uid);
    let result = await this.orderService.placeOrder(order);
    
    window.location.href = `/order-success/${result.key}`;
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}
