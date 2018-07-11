// https://angular.io/docs/ts/latest/guide/router.html
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsListComponent } from './components/all-products/all-products.component';
import { CartComponent } from './components/cart/cart.component';
import { FavouritesComponent } from './components/favourites/favourites.component';





const appRoutes: Routes = [
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"cart",
        component: CartComponent
    },
    {
        path:"favourite-products",
        component: FavouritesComponent
    },
    {
        path:"earings",
        component: HomeComponent
    },
    {
        path:"bracelets",
        component: HomeComponent
    },
    {
        path:"all-products",
        component: ProductsListComponent
    },


]

@NgModule({
    imports: [
RouterModule.forRoot(
            appRoutes
        ),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}







