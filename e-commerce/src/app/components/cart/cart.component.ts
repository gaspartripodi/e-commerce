import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from "@angular/material/snack-bar";

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
  value = 'Clear me';

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
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
    this.snackBar.open("Your order has been submitted");
  }

}