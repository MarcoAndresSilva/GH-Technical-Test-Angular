import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ProductDashboardComponent } from './features/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './features/product-form/product-form.component';
import { ToastsContainerComponent } from './shared/components/toasts-container/toasts-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDashboardComponent,
    ProductFormComponent,
    ToastsContainerComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, NgbModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
