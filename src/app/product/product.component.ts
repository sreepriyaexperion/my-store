import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('productProperty') product;
  constructor(private router: Router) {}
  addToCart() {
    alert('add to cart');
  }
  goToDetails(productId) {
    this.router.navigate(['product', productId]);
  }
  ngOnInit() {
  }

}
