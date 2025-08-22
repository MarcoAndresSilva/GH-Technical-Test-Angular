import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs'; // <-- Importa 'map'
import { Product, ProductApiResponse } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<ProductApiResponse>(this.apiUrl)
      .pipe(map((response) => response.products));
  }

  addProduct(
    productData: Omit<Product, 'id' | 'thumbnail'>
  ): Observable<Product> {
    return this.http.post<Product>(
      `${this.apiUrl}/add`,
      JSON.stringify(productData),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${id}`);
  }
}
