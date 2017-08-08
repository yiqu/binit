import { AboutComponent } from './about.component';
import { CommonModule } from '@angular/common';
import { MdListModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './about.routing';

/**
 * About module
 */
@NgModule({
  imports: [
    MdListModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],

  exports: [],

  declarations: [
    AboutComponent
  ],

  providers: [],
})
export class AboutModule { }
