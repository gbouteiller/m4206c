import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { ProductItemComponent } from '../components/product.item.component';
import { ProductItemHandler } from '../components/product.item.handler';
import { ProductListHandler } from '../components/product.list.handler';
import { ProductRoutingModule } from './product.routing.module';

@NgModule({
  declarations: [ProductItemHandler, ProductListHandler, ProductItemComponent],
  imports: [NativeScriptCommonModule, ProductRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ProductModule {}
