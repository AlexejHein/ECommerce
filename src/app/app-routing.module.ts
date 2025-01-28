import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './components/admin/admin.component';
import {CheckoutComponent} from './components/checkout/checkout.component';
import {CartComponent} from './components/cart/cart.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Startseite
  { path: 'product/:id', component: ProductDetailsComponent }, // Produktdetails
  { path: 'cart', component: CartComponent }, // Warenkorb
  { path: 'checkout', component: CheckoutComponent }, // Checkout
  { path: 'admin', component: AdminComponent }, // Admin-Bereich
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
