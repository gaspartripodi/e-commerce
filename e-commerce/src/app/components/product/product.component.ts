import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; 

//Models
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product: IProduct;
  @Input() productId;

}
