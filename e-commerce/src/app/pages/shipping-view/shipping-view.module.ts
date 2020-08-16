import { NgModule } from '@angular/core';
import { ShippingViewRoutingModule } from './shipping-view-routing.module';

//Modules
import { SharedModule } from 'src/app/shared-module.module';

//View
import { ShippingViewComponent } from './shipping-view.component';

//Components
import { ShippingComponent } from 'src/app/components/shipping/shipping.component';


@NgModule({
  declarations: [
    ShippingViewComponent,
    ShippingComponent
  ],
  imports: [
    SharedModule,
    ShippingViewRoutingModule
  ]
})
export class ShippingViewModule { }
