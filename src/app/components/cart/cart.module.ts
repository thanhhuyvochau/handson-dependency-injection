import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemListComponent } from './cart-item-list/cart-item-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartService } from 'src/app/shared/services/cart.service';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "**", component: CartItemListComponent}
];

@NgModule({
  declarations: [
    CartItemListComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [CartService]
})
export class CartModule { }
