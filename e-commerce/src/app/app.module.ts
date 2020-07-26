import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Simulated server
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
// Simulated server
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Components
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NavComponent } from './components/nav/nav.component';
import { StoreComponent } from './components/store/store.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

//Pages/views
import { CartViewComponent } from './pages/cart-view/cart-view.component';
import { HomeViewComponent } from './pages/home-view/home-view.component';
import { ProductDetailsViewComponent } from './pages/product-details-view/product-details-view.component';
import { ShippingViewComponent } from './pages/shipping-view/shipping-view.component';
import { StoreViewComponent } from './pages/store-view/store-view.component';
import { SearchViewComponent } from './pages//search-view/search-view.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    NavComponent,
    StoreComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    ProductComponent,
    FooterComponent,
    MainBannerComponent,
    CartViewComponent,
    HomeViewComponent,
    ProductDetailsViewComponent,
    ShippingViewComponent,
    SearchBarComponent,
    StoreViewComponent,
    SearchViewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }