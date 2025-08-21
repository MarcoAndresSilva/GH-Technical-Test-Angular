import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '@core/models/product.model';
import { ProductService } from '@core/services/product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '@shared/services/toast.service';

@Component({
  selector: 'app-product-dashboard',
  standalone: false,
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss'],
})
export class ProductDashboardComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    private modalService: NgbModal,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.products$ = this.productService.getProducts();
  }

  onDeleteProduct(id: number, name: string): void {
    const confirmation = window.confirm(
      `Estas seguro de eliminar el producto ${name}?`
    );

    if (confirmation) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          this.loadProducts();
          this.toastService.show('Producto eliminado', {
            classname: 'bg-success text-light',
            delay: 2000,
          });
        },
        error: (err) => {
          this.toastService.show('Error al eliminar el producto', {
            classname: 'bg-danger text-light',
            delay: 2000,
          });
        },
      });
    }
  }

  openAddProductModal(content: any): void {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
    });
  }

  onAddProduct(newProduct: Omit<Product, 'id'>, modal: any): void {
    this.productService.addProduct(newProduct).subscribe({
      next: () => {
        this.loadProducts();
        this.toastService.show('Producto Agregado', {
          classname: 'bg-success text-light',
          delay: 2000,
        });
        modal.close();
      },
      error: (err) => {
        console.error('Error al agregar el producto', err);
        this.toastService.show('Error al agregar el producto', {
          classname: 'bg-danger text-light',
          delay: 2000,
        });
      },
    });
  }
}
