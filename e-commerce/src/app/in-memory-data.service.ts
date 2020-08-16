import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IProduct } from './models/product';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      {
        "id": 0,
        "name": "iPhone 8",
        "price": 799,
        "description": "A large phone with one of the best screens",
        "stock": 45,
        "image": "/assets/images/phone1.jpg"
      },
      {
        "id": 1,
        "name": "Alcatel 3L",
        "price": 699,
        "description": "A great phone with one of the best cameras",
        "stock": 23,
        "image": "/assets/images/phone2.jpg"
      },
      {
        "id": 2,
        "name": "iPhone X",
        "price": 299,
        "description": "A great phone with one of the best cameras",
        "stock": 12,
        "image": "/assets/images/phone3.jpg"
      },
      {
        "id": 3,
        "name": "Google Pixel 4",
        "price": 299,
        "description": "A great phone with one of the best cameras",
        "stock": 23,
        "image": "/assets/images/phone4.jpg"
      },
      {
        "id": 4,
        "name": "Motorola Moto E",
        "price": 799,
        "description": "A large phone with one of the best screens",
        "stock": 41,
        "image": "/assets/images/phone2.jpg"
      },
      {
        "id": 5,
        "name": "LG Q61",
        "price": 799,
        "description": "A large phone with one of the best screens",
        "stock": 12,
        "image": "/assets/images/phone3.jpg"
      },
      {
        "id": 6,
        "name": "HTC U11",
        "price": 699,
        "description": "A great phone with one of the best cameras",
        "stock": 11,
        "image": "/assets/images/phone4.jpg"
      },
      {
        "id": 7,
        "name": "LG Velvet",
        "price": 699,
        "description": "A great phone with one of the best cameras",
        "stock": 24,
        "image": "/assets/images/phone1.jpg"
      },
      {
        "id": 8,
        "name": "Xiaomi Redmi 9",
        "price": 699,
        "description": "A great phone with one of the best cameras",
        "stock": 14,
        "image": "/assets/images/phone2.jpg"
      },
      {
        "id": 9,
        "name": "Google Pixel 3 XL",
        "price": 699,
        "description": "A great phone with one of the best cameras",
        "stock": 56,
        "image": "/assets/images/phone3.jpg"
      },
      {
        "id": 10,
        "name": "Motorola Edge+",
        "price": 699,
        "description": "A great phone with one of the best cameras",
        "stock": 5,
        "image": "/assets/images/phone4.jpg"
      },
      {
        "id": 11,
        "name": "LG Q70",
        "price": 699,
        "description": "A great phone with one of the best cameras",
        "stock": 24,
        "image": "/assets/images/phone1.jpg"
      },
      {
        "id": 12,
        "name": "LG K50S",
        "price": 699,
        "description": "A great phone with one of the best cameras",
        "stock": 14,
        "image": "/assets/images/phone2.jpg"
      },
      {
        "id": 13,
        "name": "Alcatel 1B",
        "price": 699,
        "description": "A great phone with one of the best cameras",
        "stock": 56,
        "image": "/assets/images/phone3.jpg"
      },
      {
        "id": 14,
        "name": "LG K61",
        "price": 799,
        "description": "A large phone with one of the best screens",
        "stock": 45,
        "image": "/assets/images/phone1.jpg"
      },
      {
        "id": 15,
        "name": "LG Stylo 6",
        "price": 699,
        "description": "A great phone with one of the best cameras",
        "stock": 23,
        "image": "/assets/images/phone2.jpg"
      },
      {
        "id": 16,
        "name": "LG W10",
        "price": 299,
        "description": "A great phone with one of the best cameras",
        "stock": 12,
        "image": "/assets/images/phone3.jpg"
      },
      {
        "id": 17,
        "name": "iPhone 8 Plus",
        "price": 299,
        "description": "A great phone with one of the best cameras",
        "stock": 23,
        "image": "/assets/images/phone4.jpg"
      }
    ];
    return { products };
  }

  // Overrides the genId method to ensure that a products always has an id.
  // If the products array is empty,
  // the method below returns the initial number (11).
  // if the products array is not empty, the method below returns the highest
  // product id + 1.
  genId(products: IProduct[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 11;
  }
}