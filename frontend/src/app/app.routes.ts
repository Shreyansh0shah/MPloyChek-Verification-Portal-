import { Routes } from '@angular/router';

import { Login } from './auth/login/login';

import { AdminPanel } from './admin/admin-panel/admin-panel';

//import { Admin } from './admin/admin/admin';

import { DashboardComponent } from './dashboard/dashboard/dashboard';

import { Register } from './auth/register/register';

export const routes: Routes = [
  {
    path: '',
    component: Login,
  },
  {
    path: 'register',
    component: Register,
  },

  {
  path: 'dashboard',
  component: DashboardComponent,
  },

  {
  path: 'admin',
  component: AdminPanel,
  },
  //{
//   path: 'admin',
//   component: Admin,
//   },
];