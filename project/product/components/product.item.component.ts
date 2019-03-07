import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Product } from '../models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'product-item',
  template: `
    <StackLayout backgroundColor="white" borderColor="#dddddd" borderWidth="1" class="m-20 p-10">
      <Label [text]="product?.name" color="black" class="h3 p-l-15"></Label>
      <Label [text]="product?.year" class="footnote p-l-15 m-b-20"></Label>
      <FlexboxLayout justifyContent="center" alignItems="center" [backgroundColor]="product?.color" height="100">
        <Label [text]="product?.pantone_value" color="white" class="font-weight-bold"></Label>
      </FlexboxLayout>
    </StackLayout>
  `,
})
export class ProductItemComponent {
  @Input() product: Product;
}
