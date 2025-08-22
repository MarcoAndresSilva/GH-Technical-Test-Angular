import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), importProvidersFrom(NgbModule)],
}).catch((err) => console.error(err));
