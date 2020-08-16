import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ``, loadChildren: () =>
      import('./pages/home-view/home-view.module').then(m => m.HomeViewModule)
  },
  {
    path: `detail/:productId`, loadChildren: () =>
      import('./pages/product-details-view/product-details-view.module').then(m => m.ProductDetailsViewModule)
  },
  {
    path: `cart`, loadChildren: () =>
      import('./pages/cart-view/cart-view.module').then(m => m.CartViewModule)
  },
  {
    path: `shipping`, loadChildren: () =>
      import('./pages/shipping-view/shipping-view.module').then(m => m.ShippingViewModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }