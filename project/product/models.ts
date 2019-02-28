export interface Product {
  color: string;
  id: string;
  name: string;
  pantone_value: string;
  year: number
}

export interface ProductsResponse {
  data: Product[];
}

export interface ProductResponse {
  data: Product;
}