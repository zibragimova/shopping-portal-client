import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { ProductsService } from "../../services/products.service";
import { ShoppingCartService } from "../../services/shopping-cart.service";

declare var $: any;

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
 
  constructor(public router: Router, public productService:ProductsService, public cartService:ShoppingCartService
  ) {}

  ngOnInit() {}

  logout() {
    this.router.navigate(["/"]);
    location.reload();
  }
}
