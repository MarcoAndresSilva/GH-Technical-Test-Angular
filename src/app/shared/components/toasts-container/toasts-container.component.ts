import { Component } from '@angular/core';
import { ToastService } from '@shared/services/toast.service';

@Component({
  selector: 'app-toasts-container',
  standalone: false,
  templateUrl: './toasts-container.component.html',
  styleUrls: ['./toasts-container.component.scss'],
})
export class ToastsContainerComponent {
  constructor(public toastService: ToastService) {}
}
