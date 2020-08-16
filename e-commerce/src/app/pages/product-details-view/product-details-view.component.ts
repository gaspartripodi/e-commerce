import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Models
import { IProduct } from '../../models/product';

//Services
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product-details-view',
  templateUrl: './product-details-view.component.html',
  styleUrls: ['./product-details-view.component.css']
})
export class ProductDetailsViewComponent implements OnInit {

  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.route.params.subscribe(() => {
      const id = +this.route.snapshot.paramMap.get('productId');
      this.productService.getProduct(id).subscribe(product => { this.product = product; });
    });
  }

}