import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutModule } from './about/about.module';
import { BodyModule } from './body/body.module';
import { NotFoundModule } from './404/404.module';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    AboutModule,
    BodyModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    NotFoundModule,
    RouterModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
