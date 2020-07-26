import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pages/views
import { HomeViewComponent } from './pages/home-view/home-view.component';
import { ProductDetailsViewComponent } from './pages/product-details-view/product-details-view.component';
import { CartViewComponent } from './pages/cart-view/cart-view.component';
import { ShippingViewComponent } from './pages/shipping-view/shipping-view.component';
import { StoreViewComponent } from './pages/store-view/store-view.component';
import { SearchViewComponent } from './pages/search-view/search-view.component';

const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'detail/:productId', component: ProductDetailsViewComponent },
  { path: 'store', component: StoreViewComponent },
  { path: 'search', component: SearchViewComponent },
  { path: 'cart', component: CartViewComponent },
  { path: 'shipping', component: ShippingViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }