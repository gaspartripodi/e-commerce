import { Component } from '@angular/core';

//Products
import { products } from '../products';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  
  products = products;

  share(name) {
    window.alert('The product ' + name + ' has been shared!');
  }

  onNotify(name) {
    window.alert('You will be notified when the product ' + name + ' goes on sale');
  }

}