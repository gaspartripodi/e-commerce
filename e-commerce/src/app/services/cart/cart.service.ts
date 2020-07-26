import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Models
import { IItem } from '../../models/item';
import { IProduct } from '../../models/product';

//Shipping prices
import { shippingPrices } from '../../../assets/shipping';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: IItem[] = [];

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product: IProduct, productQuantity) {
    const subtotal = product.price * productQuantity;
    const item: IItem = {
      "product": product,
      "quantity": +productQuantity,
      "subtotal": subtotal
    }
    const sameProduct = this.items.find(element => element.product == item.product);
    if(sameProduct == null) {
      this.items.push(item);
    }
    else {
      this.items.forEach(element => {
        if(element.product = item.product) {
          element.quantity = +element.quantity + +item.quantity;
          element.subtotal += +item.subtotal;
        }
      });
    }
  }

  getItems() {
    return this.items;
  }

  getItemsQuantity() {
    let quantity = 0;
    this.items.forEach(element => {
      quantity += element.quantity;
    });
    return quantity;
  }

  deleteItem(position) {
    this.items.splice(position, 1);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return shippingPrices;
  }

}