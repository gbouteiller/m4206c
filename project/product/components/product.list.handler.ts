import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

import { Product } from '../models';
import { ProductService } from '../services/product.service';

@Component({
  template: `
  `,
})
export class ProductListHandler implements OnInit {
  loading = true;
  products: Product[];
  sort = 'id';

  constructor(readonly productService: ProductService, readonly router: RouterExtensions) {}

  ngOnInit() {
    this.productService.readMany().subscribe((products) => {
      this.products = products;
      this.loading = false;
    });
  }

  onTapSort() {
    this.sort = this.sort === 'name' ? 'id' : 'name';
    this.products = this.productService.sortBy(this.products, this.sort);
  }
}
