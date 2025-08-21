import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductDashboardComponent } from './features/product-dashboard/product-dashboard.component';

@NgModule({
  declarations: [AppComponent, ProductDashboardComponent],
  imports: [BrowserModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
