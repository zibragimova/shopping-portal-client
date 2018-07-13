import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import './rxjs-extensions';

// third party imports
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { AppRoutingModule } from './app.routing';

//COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsListComponent } from './components/all-products/all-products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { CartComponent } from './components/cart/cart.component';
import { FavouritesComponent } from './components/favourites/favourites.component';

//services
import { ProductsService } from './services/products.service';
import { FilterByCategoryPipe } from './pipes/filterByCategory.pipe';
import { ShoppingCartService } from './services/shopping-cart.service';
import { LocalStorageService, StorageService } from './services/storage.service';
import { DeliveryOptionsDataService } from './services/delivery-options.service';
import { CheckoutComponent } from './components/checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    ProductsListComponent,
    NavbarComponent,
    FilterByCategoryPipe,
    CartComponent,
    FavouritesComponent,
    CheckoutComponent
  ],
  imports: [
 
   // ngx-bootstrap
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(), 
    AccordionModule.forRoot(),
    BrowserModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ProductsService, ShoppingCartService,LocalStorageService,DeliveryOptionsDataService,
    LocalStorageService,
    { provide: StorageService, useClass: LocalStorageService },
    {
      deps: [StorageService, ProductsService, DeliveryOptionsDataService],
      provide: ShoppingCartService,
      useClass: ShoppingCartService
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
