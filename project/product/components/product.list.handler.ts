import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

import { Product } from '../models';
import { ProductService } from '../services/product.service';

@Component({
  template: `
    <GridLayout rows="*,auto">
      <ListView rowspan="2" [items]="products" (itemTap)="onItemTap($event)" class="list-group">
        <ng-template let-product="item" let-even="even">
          <StackLayout orientation="horizontal" class="list-group-item" [ngClass]="{ 'bg-light': even }">
            <Label [text]="product.id + ' - ' + product.name"></Label>
          </StackLayout>
        </ng-template>
      </ListView>
      <ActivityIndicator row="0" [busy]="loading" width="60" height="60" class="activity-indicator"></ActivityIndicator>
      <AbsoluteLayout row="1" class="m-10 pull-right">
        <Button [text]="sortIcon" (tap)="onTapSort()" borderRadius="50%" height="50" width="50" class="fas btn btn-primary"></Button>
      </AbsoluteLayout>
    </GridLayout>
  `,
})
export class ProductListHandler implements OnInit {
  loading = true;
  products: Product[];
  sort = 'id';

  get sortIcon(): string {
    return this.sort === 'id' ? '\uf15d' : '\uf160';
  }

  constructor(readonly productService: ProductService, readonly router: RouterExtensions) {}

  ngOnInit() {
    this.productService.readMany().subscribe((products) => {
      this.products = products;
      this.loading = false;
    });
  }

  onItemTap({ index }: { index: number }) {
    this.router.navigate(['/articles', this.products[index].id]);
  }

  onTapSort() {
    this.sort = this.sort === 'name' ? 'id' : 'name';
    this.products = this.productService.sortBy(this.products, this.sort);
  }
}
