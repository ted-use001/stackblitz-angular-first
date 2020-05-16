import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert("你的产品被添加到购物车");
  }

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}