import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

@Input() content;

addToCart() {
  console.log('click');
}

constructor(private router: Router) { }

goToDetails(productId){
  this.router.navigate(['product', productId]);
}

ngOnInit() {
}

}


