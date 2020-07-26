import { Component, Input } from '@angular/core';

//Models
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  @Input() products: IProduct[];

}