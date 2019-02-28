import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../models';
import { ProductService } from '../services/product.service';

@Component({
  template: `
    <GridLayout rows="auto,*,auto" class="bg-light">
      <product-item *ngIf="product" row="0" [product]="product"></product-item>
      <ActivityIndicator rowspan="2" [busy]="loading" width="60" height="60" class="activity-indicator"></ActivityIndicator>
      <Button row="2" [nsRouterLink]="['../']" class="btn btn-primary">
        <FormattedString>
          <Span text="\uf03a" class="fas"></Span>
          <Span text="  RETOUR"></Span>
        </FormattedString>
      </Button>
    </GridLayout>
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
