import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'my-store';
  productArray: Products[] = [];

  constructor(private productService: ProductService) {
    // tslint:disable-next-line: no-unused-expression
    this.productService.getProduct()
      .subscribe((res: Products[]) => {
        this.productArray = res;
      });
  }

  ngOnInit() {
  }

}
