import { Component, Input } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

//Models
import { IProduct } from "../../models/product";

//Services
import { CartService } from "../../services/cart/cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent {

  @Input() product: IProduct;

  productQuantity;

  constructor(
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) { }

  addToCart() {
    if (this.productQuantity != null) {
      this.cartService.addToCart(this.product, this.productQuantity);
      this.snackBar.open("Your product " + this.product.name + " has been added to the cart!");
    }
  }

  share(name) {
    this.snackBar.open("The product " + name + " has been shared!");
  }

  onNotify(name) {
    this.snackBar.open("You will be notified when the product " + name + " goes on sale");
  }

}