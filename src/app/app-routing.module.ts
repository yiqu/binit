import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { NotFoundComponent } from './404/404.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent
  },
  //{ path: '', redirectTo: '/analyze', pathMatch: 'full' },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

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
