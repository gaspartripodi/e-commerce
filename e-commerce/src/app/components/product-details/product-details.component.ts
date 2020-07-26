import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Models
import { IProduct } from '../../models/product';

//Services
import { CartService } from '../../services/cart/cart.service';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: IProduct;
  productStock;
  productQuantity;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService
  ) { }


  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('productId');
    this.productService.getProduct(id)
      .subscribe(product => {
        this.product = product;
        this.productStock = Array.from(Array(this.product.stock), (_, i) => i + 1);
      }
      );
  }

  addToCart(product, productQuantity) {
    if (productQuantity != null) {
      this.cartService.addToCart(product, productQuantity);
      window.alert('Your product ' + product.name + ' has been added to the cart!');
    }
  }

  share(name) {
    window.alert('The product ' + name + ' has been shared!');
  }

  onNotify(name) {
    window.alert('You will be notified when the product ' + name + ' goes on sale');
  }

}