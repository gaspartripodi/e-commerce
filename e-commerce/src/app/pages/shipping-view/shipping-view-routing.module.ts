import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShippingViewComponent } from './shipping-view.component'

const routes: Routes = [
  {
    path: '', component: ShippingViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShippingViewRoutingModule { }
