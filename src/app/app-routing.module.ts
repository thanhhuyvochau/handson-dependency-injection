import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartItemListComponent } from './components/cart/cart-item-list/cart-item-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: 'cart', loadChildren: () => import('./components/cart/cart.module').then(m => m.CartModule) },
  { path: 'product', component: ProductListComponent },
  {path: "**", component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
