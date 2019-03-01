import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../models';
import { ProductService } from '../services/product.service';

@Component({
  template: `
  `,
})
export class ProductItemHandler implements OnInit {
  loading = true;
  product: Product;

  constructor(readonly productService: ProductService, readonly route: ActivatedRoute) {}

  ngOnInit() {
    this.productService.read(this.route.snapshot.params.id).subscribe((product) => {
      this.product = product;
      this.loading = false;
    });
  }
}
