import { NgModule } from '@angular/core';
import { ProductDetailsViewRoutingModule } from './product-details-view-routing.module';

//Modules
import { SharedModule } from 'src/app/shared-module.module';

//View
import { ProductDetailsViewComponent } from './product-details-view.component';

//Components
import { ProductDetailsComponent } from 'src/app/components/product-details/product-details.component';
import { ProductAlertsComponent } from 'src/app/components/product-alerts/product-alerts.component';


@NgModule({
  declarations: [
    ProductDetailsViewComponent,
    ProductDetailsComponent,
    ProductAlertsComponent
  ],
  imports: [
    SharedModule,
    ProductDetailsViewRoutingModule
  ]
})
export class ProductDetailsViewModule { }
