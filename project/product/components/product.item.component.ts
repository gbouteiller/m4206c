import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Product } from '../models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'product-item',
  template: `
  `,
})
export class ProductItemComponent {
  @Input() product: Product;
}
