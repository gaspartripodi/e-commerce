import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

//Services
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  itemsQuantity = 0;

  constructor(
    private cartService: CartService
  ) { }

  ngDoCheck() {
    this.itemsQuantity = this.cartService.getItemsQuantity();
  }

}