import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ShoppingCart } from '../../models/shopping-cart.model';
import { Product } from '../../models/product';
import { CartItem } from '../../models/cart-item.model';
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { ProductsService } from '../../services/products.service';

interface ICartItemWithProduct extends CartItem {
  product: Product;
  totalCost: number;
  
} 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _shoppingCartService:ShoppingCartService, private _productsService:ProductsService) { }
  public cart: Observable<ShoppingCart>;
  public cartItems: ICartItemWithProduct[];
  public itemCount: number;
  //public products: Observable<Product[]>;


  private products: Product[];
  private cartSubscription: Subscription;


  ngOnInit() {
    this.cart=this._shoppingCartService.get();

    console.log(this.cart)
    console.log(this.cartItems)
  
  
  this.cartSubscription = this.cart.subscribe((cart) => {
    this.itemCount = cart.items.map((x) => x.quantity).reduce((p, n) => p + n, 0);
    console.log("ITEM COUNT IS   ----"+ this.itemCount)
    console.log("GROSS TOTAL " + cart.grossTotal)
    this._productsService.list().subscribe((products) => {
      this.products = products;
      this.cartItems = cart.items
                         .map((item) => {
                            const product = this.products.
                            find((p) => p.productId === item.productId);
                            return {
                              ...item,
                              product,
                              totalCost: product.price * item.quantity };
                         });
    });
  });


  console.log(this.cart)
  console.log(this.cartItems)

  }
}
