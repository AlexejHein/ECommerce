import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../services/product.service';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {RouterLink, RouterModule} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true, // Standalone aktiviert
  imports: [CommonModule, MatCardModule, MatButton, RouterLink, RouterModule], // Wichtige Module importieren
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = []; // Hier werden die Produkte gespeichert

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data; // Die Produkte werden aus dem Service geladen
      },
      (error) => {
        console.error('Fehler beim Laden der Produkte:', error);
      }
    );
  }
}
