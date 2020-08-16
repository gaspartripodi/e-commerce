import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailsViewComponent } from './product-details-view.component'

const routes: Routes = [
  {
    path: '', component: ProductDetailsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDetailsViewRoutingModule { }
