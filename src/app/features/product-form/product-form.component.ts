import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Product } from '@core/models/product.model';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<Omit<Product, 'id'>>();
  productForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      price: [null, [Validators.required, Validators.min(0.01)]],
      stock: [
        null,
        [
          Validators.required,
          Validators.min(0),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
    });
  }

  // Getter para acceder fácilmente a los controles del formulario en la plantilla
  get title() {
    return this.productForm.get('title');
  }
  get price() {
    return this.productForm.get('price');
  }
  get stock() {
    return this.productForm.get('stock');
  }

  onSubmit(): void {
    console.log('Formulario enviado');

    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    console.log('¡Formulario válido! Emitiendo...');
    this.formSubmit.emit(this.productForm.value);
  }
}
