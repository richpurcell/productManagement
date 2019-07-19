import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductShowComponent},
  {path: 'create', component: CreateProductComponent},
  {path: 'edit/:id', component: EditProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
