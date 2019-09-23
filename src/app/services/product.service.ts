import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient
  ) { }

  // products: Product[] = [
  //   {
  //     title: `Business`,
  //     // tslint:disable-next-line: max-line-length
  //     imageUrl: `https://images.unsplash.com/photo-1565281756735-f5d99a69c1bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80`,
  //     description: `Shirt, Pant and Sneakers`,
  //     isAvailable: true,
  //     price: 99
  //   },
  //   {
  //     title: 'Home',
  //     // tslint:disable-next-line: max-line-length
  //     imageUrl: `https://images.unsplash.com/photo-1565281756735-f5d99a69c1bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80`,
  //     description: `Shirt, Pant and Sneakers, and whole, blah`,
  //     isAvailable: false,
  //     price: 100
  //   }
  // ];

  getProducts() {
    return this.httpClient.get('http://localhost:3000/product');
  }

}
