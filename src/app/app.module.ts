import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AdminComponent } from './components/admin/admin.component';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatAnchor, MatButton, MatIconButton} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {HomeComponent} from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {MatToolbar} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIcon} from '@angular/material/icon';
import {MatSidenav, MatSidenavContainer} from '@angular/material/sidenav';
import {MatListItem} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    AdminComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatButton,
    HttpClientModule,
    HomeComponent,
    MatToolbar,
    FlexLayoutModule,
    MatAnchor,
    MatIconButton,
    MatIcon,
    MatSidenavContainer,
    MatSidenav,
    MatListItem
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
