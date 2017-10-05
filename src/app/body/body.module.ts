import { BodyComponent } from './body.component';
import { ClipboardModule } from 'ngx-clipboard';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatButtonModule, 
  MatTooltipModule, 
  MatRadioModule } from '@angular/material';
import { RouterModule } from '@angular/router';

/**
 * Body Module. 
 * FormsModule is for 2 way binding, common module is for ngIf and ngFor.
 * 
 */
@NgModule({
  imports: [
    CommonModule,
    ClipboardModule,
    FormsModule,
    MatButtonModule,
    MatTooltipModule,
    MatRadioModule,
    RouterModule
  ],

  exports: [
    BodyComponent
  ],

  declarations: [
    BodyComponent
  ],

  providers: [],
})
export class BodyModule { }
