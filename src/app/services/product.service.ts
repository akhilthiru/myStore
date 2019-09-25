import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';
import {environment} from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getProducts() {
    return this.httpClient.get(environment.baseUrl + '/product');
  }

  getProduct(productId) {
    return this.httpClient.get(environment.baseUrl + '/product/' + productId);
  }

}
