import { map } from 'rxjs/operators';
import { Cart } from '../../../shared/models/cart';
import { CartService } from '../../../shared/services/cart.service';
import { Observable } from 'rxjs';
import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public cart$: Observable<Cart>;

  constructor(private cartService: CartService) { }

  async ngOnInit(): Promise<void> {
    this.cart$ = (await this.cartService.getCart())
    .snapshotChanges()
    .pipe(map(sc => new Cart(sc.key, sc.payload.val().cartLines, sc.payload.val().createdOn)));
  }
}
