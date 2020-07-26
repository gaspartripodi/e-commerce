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
        "name": "Phone XL",
        "price": 799,
        "description": "A large phone with one of the best screens",
        "stock": 45,
        "image": "https://img.cafago.com/product/xy/500/500/p/gu1/P/U/PZ0112G-EU/PZ0112G-EU-1-9a00-G46J.jpg"
      },
      {
        "id": 1,
        "name": "Phone Mini",
        "price": 699,
        "description": "A great phone with one of the best cameras",
        "stock": 23,
        "image": "https://img.cafago.com/product/xy/500/500/p/gu1/P/U/PZ0112G-EU/PZ0112G-EU-1-9a00-G46J.jpg"
      },
      {
        "id": 2,
        "name": "Phone Standard",
        "price": 299,
        "description": "",
        "stock": 12,
        "image": ""
      },
      {
        "id": 3,
        "name": "Phone Standard Max",
        "price": 299,
        "description": "",
        "stock": 23,
        "image": ""
      },
      {
        "id": 4,
        "name": "Phone XL",
        "price": 799,
        "description": "A large phone with one of the best screens",
        "stock": 41,
        "image": "https://img.cafago.com/product/xy/500/500/p/gu1/P/U/PZ0112G-EU/PZ0112G-EU-1-9a00-G46J.jpg"
      },
      {
        "id": 5,
        "name": "Phone XL",
        "price": 799,
        "description": "A large phone with one of the best screens",
        "stock": 12,
        "image": "https://img.cafago.com/product/xy/500/500/p/gu1/P/U/PZ0112G-EU/PZ0112G-EU-1-9a00-G46J.jpg"
      },
      {
        "id": 6,
        "name": "Phone Mini",
        "price": 699,
        "description": "A great phone with one of the best cameras",
        "stock": 11,
        "image": "https://img.cafago.com/product/xy/500/500/p/gu1/P/U/PZ0112G-EU/PZ0112G-EU-1-9a00-G46J.jpg"
      },
      {
        "id": 7,
        "name": "Phone Mini",
        "price": 699,
        "description": "A great phone with one of the best cameras",
        "stock": 24,
        "image": "https://img.cafago.com/product/xy/500/500/p/gu1/P/U/PZ0112G-EU/PZ0112G-EU-1-9a00-G46J.jpg"
      },
      {
        "id": 8,
        "name": "Phone Mini",
        "price": 699,
        "description": "A great phone with one of the best cameras",
        "stock": 14,
        "image": "https://img.cafago.com/product/xy/500/500/p/gu1/P/U/PZ0112G-EU/PZ0112G-EU-1-9a00-G46J.jpg"
      },
      {
        "id": 9,
        "name": "Phone Mini",
        "price": 699,
        "description": "A great phone with one of the best cameras",
        "stock": 56,
        "image": "https://img.cafago.com/product/xy/500/500/p/gu1/P/U/PZ0112G-EU/PZ0112G-EU-1-9a00-G46J.jpg"
      },
      {
        "id": 10,
        "name": "Phone Mini",
        "price": 699,
        "description": "A great phone with one of the best cameras",
        "stock": 5,
        "image": "https://img.cafago.com/product/xy/500/500/p/gu1/P/U/PZ0112G-EU/PZ0112G-EU-1-9a00-G46J.jpg"
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