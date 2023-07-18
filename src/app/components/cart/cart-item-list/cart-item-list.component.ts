import { Component } from '@angular/core';
import { Product } from 'src/app/shared/dtos/cart-item.dto';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.css'],
})
export class CartItemListComponent {
  cartItems: Product[];
  constructor(public cartService:CartService){
    this.cartItems = cartService.getItems();
  }
}
