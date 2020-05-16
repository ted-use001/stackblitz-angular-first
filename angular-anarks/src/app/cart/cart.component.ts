import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service'; 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartServcie: CartService,
    private formBuilder: FormBuilder,
  ) { 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    });
  }

  onSubmit(customerData){
    //Process checkout data here
    this.items = this.cartServcie.clearCart();
    this.checkoutForm.reset();

    console.warn('你的订单已提交', customerData);
  }

  ngOnInit() {
    this.items = this.cartServcie.getItems();
  }

  getClear() {
    this.items = this.cartServcie.clearCart();
  }

}