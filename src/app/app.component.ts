import { Component } from '@angular/core';
import { Products } from './models/products';
import { ProductService } from './services/product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-store';
  productArray: Products[] = [];
  constructor(private productService: ProductService ) {
     // tslint:disable-next-line: no-unused-expression
     this.productService.getProduct()
     .subscribe(( res: Products[] ) => {
       this.productArray = res;
     });
    }
  // product: Products;
  // secondProduct: Products;
}
