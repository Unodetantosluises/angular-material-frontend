import { CommonModule } from '@angular/common';
import { Component, computed, Input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, MatTooltipModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})
export class CustomSidenavComponent {

  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'home',
      label: 'Home',
      route: 'home'
    },
    {
      icon: 'account_circle',
      label: 'Perfil',
      route: 'account'
    },
    {
      icon: 'calendar_month',
      label: 'Calendario de Citas',
      route: 'appointments'
    },
    {
      icon: 'assignment_ind',
      label: 'Doctores',
      route: 'doctor'
    },
    {
      icon: 'person_book',
      label: 'Pacientes',
      route: 'patient'
    },
        {
      icon: 'medical_services',
      label: 'Operaciones',
      route: 'operations'
    },
    {
      icon: 'vaccines',
      label: 'Recursos',
      route: 'resources'
    },
  ]);

  profilePictureSize = computed(() => this.sideNavCollapsed() ? '32' : '100');
}
