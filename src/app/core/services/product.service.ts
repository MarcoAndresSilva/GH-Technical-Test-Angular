import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { PRODUCTS } from './mock-products';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = JSON.parse(JSON.stringify(PRODUCTS));

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of([...this.products]).pipe(delay(500));
  }

  addProduct(productData: Omit<Product, 'id'>): Observable<Product> {
    const newId =
      this.products.length > 0
        ? Math.max(...this.products.map((p) => p.id)) + 1
        : 1;
    const newProduct: Product = { id: newId, ...productData };

    this.products.push(newProduct);

    return of(newProduct).pipe(delay(500));
  }

  deleteProduct(id: number): Observable<{}> {
    const index = this.products.findIndex((p) => p.id === id);

    if (index > -1) {
      this.products.splice(index, 1);
      return of({}).pipe(delay(500));
    }

    return throwError(() => new Error('Producto no encontrado'));
  }
}
