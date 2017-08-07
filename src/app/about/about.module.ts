import { AboutComponent } from './about.component';
import { CommonModule } from '@angular/common';
import { MdListModule } from '@angular/material';
import { NgModule } from '@angular/core';

/**
 * About module
 */
@NgModule({
  imports: [
    MdListModule,
    CommonModule
  ],

  exports: [
    AboutComponent
  ],

  declarations: [
    AboutComponent
  ],

  providers: [],
})
export class AboutModule { }
