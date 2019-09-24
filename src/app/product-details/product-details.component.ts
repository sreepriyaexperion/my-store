import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Products } from '../models/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  private productObject: Products;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }
  ngOnInit() {
    this.productService.getProducts(this.route.snapshot.params.productId).subscribe((response: Products) => {
      this.productObject = response;
      console.log(this.productObject);
    });
  }

}
