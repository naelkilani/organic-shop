import { Cart } from './cart';
import { Shipping } from './shipping';
import { OrderLine } from './orderLine';

export class Order {
    key: string;
    createdOn = new Date().getTime();
    orderLines: OrderLine[];
    cartId: string;

    constructor(cart: Cart, public shipping: Shipping, public userId: string) {

        this.orderLines = cart.items.map(item => new OrderLine(item.title, item.imageUrl, item.price, item.quantity, item.totalPrice));
        this.cartId = cart.key;
    }
}