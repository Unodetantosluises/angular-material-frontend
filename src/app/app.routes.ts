import { Routes } from '@angular/router';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { BackLayoutComponent } from './layouts/back-layout/back-layout.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: FrontLayoutComponent,
    children: [
       {
        path: '',
        title: 'Neria Motos',
        component: HomeComponent
      },
      {
        path: 'catalogo',
        title: 'Catalogo',
        loadComponent: () => import('./pages/catalogo/catalogo.component').then(c => c.CatalogoComponent)
      }
    ]
  },
  {
    path: 'back',
    component: BackLayoutComponent,
    // canActivate: [AuthGuardService],
    children: [
      {
        path:'dashboard',
        title: 'Dashboard',
        loadComponent:() => import('./pages/dashboard/dashboard.component').then(c=> c.DashboardComponent)
      },
      {
        path: 'doctors',
        title: 'Doctors',
        loadComponent: () => import('./pages/doctors/doctors.component').then(c => c.DoctorsComponent)
      },
      {
        path: 'account',
        title: 'Account',
        loadComponent: () => import('./pages/account/account.component').then(c => c.AccountComponent)
      },
      {
        path: 'inventory',
        title: 'Inventory',
        loadComponent: () => import('./pages/inventory/inventory.component').then(c => c.InventoryComponent)
      },
      {
        path: 'orders',
        title: 'Orders',
        loadComponent: () => import('./pages/orders/orders.component').then(c => c.OrdersComponent)
      },
      {
        path: 'quotes',
        title: 'Quotes',
        loadComponent: () => import('./pages/quotes/quotes.component').then(c => c.QuotesComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
