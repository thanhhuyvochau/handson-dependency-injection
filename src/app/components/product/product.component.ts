import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() name: string;
  @Input() price: number;

  constructor(private cartService: CartService) {
      this.name = '';
      this.price = 0;
  }

  addToCart(name: string, price: number) {
    this.cartService.addItem({ name, price });
  }
}
