import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Product } from './../../app/models/product';


const endpoint = 'assets/json/products.json' // http://www.yourdomain.com/api/videos/

@Injectable()
export class ProductsService {

    // NavbarCounts
    navbarCartCount = 0;
    navbarFavProdCount = 0;

    //LOCAL STORAGE PRODUCT LIST NAME
    LOCAL_STORAGE_PRODUCT_LIST_CONST = "cart_product_list";

    constructor(private http: Http) { }

    list() {
        return this.http.get(endpoint)
            .map(response => response.json())
            .catch(this.handleError)
    }

    getCategories() {
        return this.http.get(endpoint).map(response => response.json())
    }

    private handleError(error: any, caught: any): any {
        console.log(error, caught)
    }

    // Adding new Product to cart db if logged in else localStorage
    addToCart(selectedProd: Product): void {
        let cartProdList: Product[];

        cartProdList = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_PRODUCT_LIST_CONST)) || [];

        cartProdList.push(selectedProd);

        setTimeout(() => {
            localStorage.setItem(this.LOCAL_STORAGE_PRODUCT_LIST_CONST, JSON.stringify(cartProdList));
            this.calculateLocalCartProdCounts();
        }, 500);
    }

    // returning LocalCarts Product Count
    calculateLocalCartProdCounts() {
        this.navbarCartCount = this.getLocalCartProducts().length;
    }

    // Fetching Locat CartsProducts
    getLocalCartProducts(): Product[] {
        const products: Product[] =
            JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_PRODUCT_LIST_CONST)) || [];
        return products;
    }

}
