import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Products } from '../models/products';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // product: Products[] = [
  //   {
  //     productName : `pen`,
  //     image: `https://www.newbridgesilverware.com/Images/Models/Full/5042.Jpg`,
  //     des: `This is the best one could ever buy and write their exam.It has got nice
  //      inks which just looks perfect and adds beauty to any kind of handwriting.
  //       It provides the perfect grip for any person to hold.`,
  //     alt: `image will load`,
  //     isAvailable: false
  //   },
  //   {
  //     productName : `penpot`,
  //     image: `https://www.brandstik.com/blog/wp-content/uploads/2015/12/5fb41696995be8620e187bcf48cbfc991.jpg`,
  //     des: `The Rubik´s Pen Holder is a perfect and cool storage for pens, scissors, rulers
  //     and useful writing instruments in shape of the Original Rubik´s Cube.All sides can be printed
  //      with your customized layout.`,
  //     alt: `image will load`,
  //     isAvailable: true
  //   }
  // ];
  constructor(
    private httpClient: HttpClient
  ) { }
  getProduct() {
    return this.httpClient.get('http://localhost:3000/product');

  }
}
