import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { NotFoundComponent } from './404/404.component';


/**
 * Routes
 * For re-direct:
 * { path: '', redirectTo: '/analyze', pathMatch: 'full' },
 * 
 */
const routes: Routes = [
  {
    path: '',
    component: BodyComponent
  },
  {
    path: 'about', // Lazy loaded
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];


/**
 * Routing for app.
 * 
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ],
  
  declarations: []
})
export class AppRoutingModule { }
