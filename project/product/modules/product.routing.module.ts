import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { ProductItemHandler } from '../components/product.item.handler';
import { ProductListHandler } from '../components/product.list.handler';

const routes: Routes = [
  { path: '', component: ProductListHandler },
  { path: ':id', component: ProductItemHandler },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class ProductRoutingModule {}
