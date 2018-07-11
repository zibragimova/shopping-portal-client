import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from './../../models/product';
import { ProductsService } from '../../services/products.service';

import 'rxjs/add/operator/map';
import { not } from '@angular/compiler/src/output/output_ast';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class ProductsListComponent implements OnInit, OnDestroy {
    private req: any;
    title = "All products list";
    productsList: [Product];
    //allCategories = new Set();
    allCategories =['ring','bracelet','necklace','earring','All'];
    selectedCategory='All';
  constructor(private _productService:ProductsService, private _shoppingCart: ShoppingCartService) {}

  ngOnInit() {
    this.req = this._productService.list().subscribe(data=>{
      this.productsList = data as [Product];
    })

    //this.allCategories = new Set(this.productsList.map((item: any) => item.category));
    // this.productsList.forEach(item=>{
    //    this.allCategories.add(item.category);
    // });
    console.log(this.allCategories);
  }

  addToCart(product:Product){
    //this._productService.addToCart(product);
    this._shoppingCart.addItem(product,1);
    console.log("SELECTED PRODUCT: " +product.productName)
  }

  ngOnDestroy(){
    this.req.unsubscribe()
  }

}

// ng g component youComponentName
