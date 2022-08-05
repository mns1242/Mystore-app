import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrderConfirmationPageComponent } from './components/order-confirmation-page/order-confirmation-page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
{path:'',component:ProductListComponent},
{path:'details/:id',component:ProductDetailsComponent},
{path:'cart',component:ShoppingCartComponent},
{path:'success/:firstName/:totalPrice',component:OrderConfirmationPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
