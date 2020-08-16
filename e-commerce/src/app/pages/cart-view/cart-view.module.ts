import { NgModule } from '@angular/core';
import { CartRoutingModule } from './cart-view-routing.module';

//Modules
import { SharedModule } from 'src/app/shared-module.module';

//View
import { CartViewComponent } from './cart-view.component';

//Components
import { CartComponent } from 'src/app/components/cart/cart.component';


@NgModule({
  declarations: [
    CartViewComponent,
    CartComponent,
  ],
  imports: [
    SharedModule,
    CartRoutingModule
  ]
})
export class CartViewModule { }
