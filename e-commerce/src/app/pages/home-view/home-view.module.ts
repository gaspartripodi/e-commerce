import { NgModule } from '@angular/core';
import { HomeViewRoutingModule } from './home-view-routing.module';

//Modules
import { SharedModule } from 'src/app/shared-module.module';

//View
import { HomeViewComponent } from './home-view.component';

//Components
import { MainBannerComponent } from 'src/app/components/main-banner/main-banner.component';
import { StoreComponent } from 'src/app/components/store/store.component';
import { BestProductsComponent } from 'src/app/components/best-products/best-products.component';

@NgModule({
  declarations: [
    HomeViewComponent,
    MainBannerComponent,
    StoreComponent,
    BestProductsComponent
  ],
  imports: [
    SharedModule,
    HomeViewRoutingModule
  ]
})
export class HomeViewModule { }
