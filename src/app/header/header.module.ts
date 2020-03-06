import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetails } from '../product-details/product-details.component';

const headerRoutes: Routes = [
  {
    path: '',
    component: HeaderComponent
  },
  {
    path: 'product-details/:id',
    component: ProductDetails
  }
]

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(headerRoutes)
  ],
  
})
export class HeaderModule { }
