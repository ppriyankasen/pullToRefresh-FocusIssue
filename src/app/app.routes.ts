import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'message/:id',
    loadComponent: () =>
      import('./view-message/view-message.page').then((m) => m.ViewMessagePage),
  },
  {
    path: '',
    redirectTo: 'label',
    pathMatch: 'full',
  },
  {
    path: 'inputbox',
    loadComponent: () => import('./inputbox/inputbox.page').then( m => m.InputboxPage)
  }
];

