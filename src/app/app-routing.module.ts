import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BookproductsComponent } from './bookproducts/bookproducts.component';
import { DisplayproductsComponent } from './displayproducts/displayproducts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsuploadComponent } from './productsupload/productsupload.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'registerComponent',component:RegisterComponent
  },
  {
    path:'logincomponent',component:LoginComponent
  },
  {
    path:'productsupload',component:ProductsuploadComponent
  },
  {
    path:'homecomponent',component:HomeComponent
  },
  {
    path:'display',component:DisplayproductsComponent ,canActivate:[AuthGuard]
  },
  {
    path:'bookproducts',component:BookproductsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
