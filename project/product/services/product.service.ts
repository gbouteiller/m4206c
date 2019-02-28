import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product, ProductResponse, ProductsResponse } from '../models';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(readonly http: HttpClient) {}

  read(id: string): Observable<Product> {
    return this.http.get<ProductResponse>(`products/${id}`).pipe(map(({ data }) => data));
  }

  readMany(): Observable<Product[]> {
    return this.http.get<ProductsResponse>('products?per_page=100').pipe(map(({ data }) => data));
  }
  
  sortBy(products: Product[], property: string): Product[] {
    return _.sortBy(products, property);
  }
}
