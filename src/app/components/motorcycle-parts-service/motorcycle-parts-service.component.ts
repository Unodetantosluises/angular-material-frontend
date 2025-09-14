import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from "@angular/router";

export interface Service {
  icon: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-motorcycle-parts-service',
  standalone: true,
  imports: [RouterLink, CommonModule, MatCardModule, MatIconModule],
  templateUrl: './motorcycle-parts-service.component.html',
  styleUrl: './motorcycle-parts-service.component.css'
})
export class MotorcyclePartsServiceComponent {
  services: Service[] = [
    {
      icon: 'build', // Ícono de llave inglesa
      name: 'Mecánica General',
      description: 'Reparaciones completas de motor, transmisión y más.'
    },
    {
      icon: 'oil_barrel', // Ícono de barril de aceite
      name: 'Cambio de Aceite',
      description: 'Servicio de cambio de aceite y filtro con productos de alta calidad.'
    },
    {
      icon: 'electric_bolt', // Ícono de rayo
      name: 'Sistema Eléctrico',
      description: 'Diagnóstico y reparación de fallas en el sistema eléctrico.'
    },
    {
      icon: 'tire_repair', // Ícono de llanta
      name: 'Servicio de Llantas',
      description: 'Montaje, balanceo y reparación de todo tipo de llantas.'
    }
  ];
}
