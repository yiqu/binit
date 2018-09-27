import { Routes } from '@angular/router';
import { AboutComponent } from './about.component';

/**
 * Routes for /about. Lazy load
 * 
 */
export const routes: Routes = [
  { 
    path: '', 
    component: AboutComponent 
  },
];
