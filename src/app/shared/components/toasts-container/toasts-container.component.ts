import { Component } from '@angular/core';
import { ToastService } from '@shared/services/toast.service';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-toasts-container',
  standalone: true,
  imports: [NgbToastModule, NgForOf],
  templateUrl: './toasts-container.component.html',
  styleUrls: ['./toasts-container.component.scss'],
})
export class ToastsContainerComponent {
  constructor(public toastService: ToastService) {}
}
