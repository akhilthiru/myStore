import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products: Product[] = [
    {
      name: `Business`,
      // tslint:disable-next-line: max-line-length
      image: `https://images.unsplash.com/photo-1565281756735-f5d99a69c1bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80`,
      imageAlt: `Dress`,
      description: `Shirt, Pant and Sneakers`,
      isAvailable: true,
    },
    {
      name: 'Home',
      // tslint:disable-next-line: max-line-length
      image: `https://images.unsplash.com/photo-1565281756735-f5d99a69c1bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80`,
      imageAlt: `Dress`,
      description: `Shirt, Pant and Sneakers, and whole, blah`,
      isAvailable: false,
    }
  ];

  getProducts() {
    return this.products;
  }

}
