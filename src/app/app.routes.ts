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
        title: 'Home',
        component: HomeComponent
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
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
