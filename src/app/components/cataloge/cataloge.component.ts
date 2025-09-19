import { Component } from '@angular/core';
import { MatInputModule } from "@angular/material/input";
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface Product {
  category: string;
  imageUrl: string;
  brand: string;
  price: number;
  name: string;
}

@Component({
  selector: 'app-cataloge',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatCardModule, MatFormFieldModule, MatButtonModule, MatIconModule],
  templateUrl: './cataloge.component.html',
  styleUrl: './cataloge.component.css'
})
export class CatalogeComponent {
  products: Product[] = [
    {
      category: 'Cascos',
      imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_728854-MLM92053089015_092025-F.webpo',
      brand: 'Hawk',
      price: 1850.00,
      name: 'Casco Integral Cyclops',
    },
    {
      category: 'Llantas',
      imageUrl: 'https://www.imotoaccesorios.com.mx/cdn/shop/products/1_2acd4051-39bb-42bc-9768-e1b3d21561b9_1024x1024.png?v=1754004804',
      brand: 'Michelin',
      price: 2500.00,
      name: 'Llanta Pilot Street 2',
    },
    {
      category: 'Aceites',
      imageUrl: 'https://mundimotos.com.mx/cdn/shop/products/EMOT-10W40-S-7100.png?v=1749072119&width=900',
      brand: 'Motul',
      price: 350.50,
      name: 'Aceite Sintético 7100',
    }
  ];
}
