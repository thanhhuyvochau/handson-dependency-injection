import { Component } from '@angular/core';
import { Product } from 'src/app/shared/dtos/cart-item.dto';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 }
  ];

  constructor(private cartService: CartService) {}
}
