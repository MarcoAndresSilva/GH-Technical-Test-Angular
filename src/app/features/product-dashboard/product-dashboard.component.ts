import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '@core/models/product.model';
import { ProductService } from '@core/services/product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '@shared/services/toast.service';

import { AsyncPipe, CurrencyPipe, NgForOf } from '@angular/common';
import { ProductFormComponent } from '@features/product-form/product-form.component';
@Component({
  selector: 'app-product-dashboard',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, NgForOf, ProductFormComponent],
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss'],
})
export class ProductDashboardComponent implements OnInit {
  private productsSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubject.asObservable();

  constructor(
    private productService: ProductService,
    private modalService: NgbModal,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      this.productsSubject.next(products);
    });
  }

  onDeleteProduct(id: number, title: string): void {
    if (window.confirm(`¿Estás seguro de que quieres eliminar "${title}"?`)) {
      const currentProducts = this.productsSubject.getValue();
      const updatedProducts = currentProducts.filter((p) => p.id !== id);
      this.productsSubject.next(updatedProducts); // actualizamos el observable

      this.productService.deleteProduct(id).subscribe({
        next: () => {
          this.toastService.show('Producto eliminado (simulación exitosa)', {
            classname: 'bg-success text-light',
          });
        },
        error: () => {
          this.productsSubject.next(currentProducts);
          this.toastService.show('Error al eliminar el producto', {
            classname: 'bg-danger text-light',
          });
        },
      });
    }
  }

  onAddProduct(
    newProductData: Omit<Product, 'id' | 'thumbnail'>,
    modal: any
  ): void {
    this.productService.addProduct(newProductData).subscribe({
      next: (responseProduct) => {
        const currentProducts = this.productsSubject.getValue();
        this.productsSubject.next([...currentProducts, responseProduct]); // Añadimos el producto devuelto por la API

        modal.close();
        this.toastService.show('Producto añadido (simulación exitosa)', {
          classname: 'bg-success text-light',
        });
      },
      error: (err) => {
        console.error('Error al añadir el producto', err);
        this.toastService.show('Error al añadir el producto', {
          classname: 'bg-danger text-light',
        });
      },
    });
  }

  openAddProductModal(content: any): void {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
    });
  }
}
