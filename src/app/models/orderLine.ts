export class OrderLine {
    constructor(
        public title: string,
        public imageUrl: string,
        public price: number,
        public quantity: number,
        public totalPrice: number
    ) { }
}