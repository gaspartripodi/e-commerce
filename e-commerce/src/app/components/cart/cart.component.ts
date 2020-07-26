import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

//Models
import { IItem } from '../../models/item';

//Services
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: IItem[] = [];
  checkoutForm;
  total = 0;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    this.generateTotal();
  }

  generateTotal() {
    this.items = this.cartService.getItems();
    this.total = 0;
    this.items.forEach(element => {
      this.total += element.subtotal;
    });
  }

  deleteItem(position) {
    this.cartService.deleteItem(position);
    this.generateTotal();
  }

  onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    this.generateTotal();
    console.warn('Your order has been submitted', customerData);
  }

}