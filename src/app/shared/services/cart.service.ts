import { Product } from '../dtos/cart-item.dto';

export class CartService {
  private items: Product[] = [];
  private _randomNo: number;
  constructor(){
    this._randomNo = Math.floor(Math.random() * 1000 + 1);
  }
  addItem(item: Product) {
    console.log("ADD ITEM => No: "+this.RandomNo);
    this.items.push(item);
  }

  removeItem(item: Product) {
    const index = this.items.findIndex((cartItem) => cartItem.name === item.name && cartItem.price === item.price);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getItems(): Product[] {
    console.log("GET ITEM => No: "+this.RandomNo);
    return this.items;
  }

  clearCart() {
    console.log("CLEAR ITEM => No: "+this.RandomNo);
    this.items = [];
  }
  get RandomNo() {
    return this._randomNo;
  }
}
