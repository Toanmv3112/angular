import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './categories/create/create.component';
import { EditComponent } from './edit/edit.component'
import { NotFoundComponent } from './categories/not-found/not-found.component';
import { ListComponent } from './categories/list/list.component'
import { LoginComponent } from './login/login.component';
import { LayoutdashboardComponent } from './layoutdashboard/layoutdashboard.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [

  {
     path:'',
     component: LayoutdashboardComponent,
     children:[
      {path:'categories/create', component: CreateComponent}, 
      {path: 'categories', component: ListComponent},
      {path: 'categories/edit/:id', component: EditComponent},
      {path: 'products/create', component: ProductCreateComponent},
      {path: 'products', component: ProductListComponent},

     ]
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'404',
    component:NotFoundComponent
  },
  {
    path:"**",
    redirectTo:'/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
