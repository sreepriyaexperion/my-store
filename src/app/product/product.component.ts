import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('productProperty') product;
  constructor() {}
  addToCart() {
    console.log('click');
  }
  ngOnInit() {
  }

}
