import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../common/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  

  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) { }

  getProduct(theProductId: number): Observable<Product> {
    const productUrl='${this.baseUrl}/${theProductIdc}';
    return this.httpClient.get<Product>(productUrl);
  }

  getProductList(theCategoryId: number): Observable<Product[]> {

    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.getProducts(searchUrl);
  }

  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }
  SearchProducts(theKeyword: string): Observable<Product[]>  {
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

    return this.getProducts(searchUrl);
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  }
}