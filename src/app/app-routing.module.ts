import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './services/product.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddProductComponent } from './add-product/add-product.component';


const routes: Routes = [{
  path: '',
  component: ProductListComponent
},
{
  path: 'product/:productId',
  component: ProductDetailsComponent
},
{
  path: 'checkout',
  component: CheckoutComponent
},
{
  path: 'add-product',
  component: AddProductComponent
},
{
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
