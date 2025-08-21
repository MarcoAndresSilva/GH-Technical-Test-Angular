import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '@core/models/product.model';

@Component({
  selector: 'app-product-form',
  standalone: false,
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  // emitira los datos del nuevo producto omitiendo el id
  @Output() formSubmit = new EventEmitter<Omit<Product, 'id'>>();
  productForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
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
  get name() {
    return this.productForm.get('name');
  }
  get price() {
    return this.productForm.get('price');
  }
  get stock() {
    return this.productForm.get('stock');
  }

  onSubmit(): void {
    console.log('Formulario enviado!'); // <-- PASO 1: ¿Se llama a esta función?
    console.log('¿Es válido?', this.productForm.valid); // <-- PASO 2: ¿Cuál es su estado?
    console.log('Errores:', this.productForm.errors); // Muestra errores a nivel de formGroup
    console.log('Valores:', this.productForm.value); // Muestra los valores actuales
    console.log('Errores en Nombre:', this.name?.errors); // Muestra errores específicos del control

    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    console.log('¡Formulario válido! Emitiendo...');
    this.formSubmit.emit(this.productForm.value);
  }
}
