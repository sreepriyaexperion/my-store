import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { AddProductComponent } from './add-product/add-product.component';
const routes: Routes = [{
  path : '',
  component : ProductListComponent
},
{
path : 'product',
component : ProductDetailsComponent
},
{
path : 'product/:productId',
component : ProductDetailsComponent
},
{
  path : 'checkout',
  component : CheckOutComponent

},
{
  path : 'addProduct',
  component : AddProductComponent

},
{  path : '**',
    redirectTo : ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

