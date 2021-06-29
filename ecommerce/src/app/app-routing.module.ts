import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { PagarComponent } from './pagar/pagar.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {
    path:'', component: LoginComponent
  },
  {
    path:"nuevo-usuario", component: NewUserComponent
  },
  {
    path:"productos", component: ProductosComponent
  },
  {
    path:"pagar", component: PagarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
