import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './categories/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ListComponent } from './categories/list/list.component';
import { EditComponent } from './edit/edit.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { LoadingOverlayComponent } from './shared/loading-overlay/loading-overlay.component';
import { LoginComponent } from './login/login.component';
import { LayoutdashboardComponent } from './layoutdashboard/layoutdashboard.component';
import { AuthInterceptor } from './_services/interceptor/auth.interceptor';
import { NotFoundComponent } from './categories/not-found/not-found.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductListComponent } from './products/product-list/product-list.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent,
    EditComponent,
    SpinnerComponent,
    LoadingOverlayComponent,
    LoginComponent,
    LayoutdashboardComponent,
    NotFoundComponent,
    ProductCreateComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
