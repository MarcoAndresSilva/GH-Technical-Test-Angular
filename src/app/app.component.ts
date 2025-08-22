import { Component } from '@angular/core';
import { ProductDashboardComponent } from '@features/product-dashboard/product-dashboard.component';
import { ToastsContainerComponent } from '@shared/components/toasts-container/toasts-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductDashboardComponent, ToastsContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'e-commerce-app';
}
