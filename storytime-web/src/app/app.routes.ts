import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'ai-vs-internet',
    loadComponent: () => import('./ai-vs-internet/ai-vs-internet.component').then(m => m.AiVsInternetComponent)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  }
];
