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

  constructor(
    private http: HttpClient
  ) { }

  getItemsFromLocalStorage(): IItem[] {
    return JSON.parse(localStorage.getItem("cart"));
  }

  saveItemsInLocalStorage(items: IItem[]) {
    localStorage.setItem("cart", JSON.stringify(items));
  }

  addToCart(product: IProduct, productQuantity) {
    let items: IItem[] = this.getItemsFromLocalStorage();
    if (items == null) {
      items = [];
    }
    const subtotal = product.price * productQuantity;
    const item: IItem = {
      "product": product,
      "quantity": +productQuantity,
      "subtotal": subtotal
    }
    const sameProduct = items.find(element => element.product.name == item.product.name);
    if (sameProduct == null) {
      items.push(item);
    }
    else {
      items.forEach(element => {
        if (element.product.name == item.product.name) {
          element.quantity = +element.quantity + +item.quantity;
          element.subtotal += +item.subtotal;
        }
      });
    }
    this.saveItemsInLocalStorage(items);
  }

  getItems() {
    const items: IItem[] = this.getItemsFromLocalStorage();
    if (items) {
      return items;
    }
    else {
      return [];
    }
  }

  getItemsQuantity() {
    const items: IItem[] = this.getItemsFromLocalStorage();
    if (items) {
      let quantity = 0;
      items.forEach(element => {
        quantity += element.quantity;
      });
      return quantity;
    }
    else {
      return 0;
    }
  }

  deleteItem(position) {
    const items: IItem[] = this.getItemsFromLocalStorage();
    if (items) {
      items.splice(position, 1);
    }
    this.saveItemsInLocalStorage(items);
  }

  clearCart() {
    const items = [];
    this.saveItemsInLocalStorage(items);
    return items;
  }

  getShippingPrices() {
    return shippingPrices;
  }

}