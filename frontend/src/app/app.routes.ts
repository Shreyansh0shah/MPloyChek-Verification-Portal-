import { Routes } from '@angular/router';

import { Login } from './auth/login/login';

import { AdminPanel } from './admin/admin-panel/admin-panel';

import { Admin } from './admin/admin/admin';

import { DashboardComponent } from './dashboard/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: Login,
  },

  {
  path: 'dashboard',
  component: DashboardComponent,
  },

  {
  path: 'admin',
  component: AdminPanel,
  },
  {
  path: 'admin',
  component: Admin,
  },
];