import { Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { PatientComponent } from './pages/patient/patient.component';
import { OperationsComponent } from './pages/operations/operations.component';
import { ResourcesComponent } from './pages/resources/resources.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'account'
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'appointments',
    component: AppointmentsComponent
  },
  {
    path: 'doctors',
    component: DoctorsComponent
  },
  {
    path: 'patients',
    component: PatientComponent
  },
  {
    path: 'operations',
    component: OperationsComponent
  },
  {
    path: 'resources',
    component: ResourcesComponent
  }
];
