import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'ai-vs-internet',
    loadComponent: () => import('./ai-vs-internet/ai-vs-internet.component').then(m => m.AiVsInternetComponent)
  },
  {
    path: 'mvp-story',
    loadComponent: () => import('./mvp-story/mvp-story.component').then(m => m.MvpStoryComponent)
  },
  {
    path: 'mvp-frameworks',
    loadComponent: () => import('./mvp-frameworks/mvp-frameworks.component').then(m => m.MvpFrameworksComponent)
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
