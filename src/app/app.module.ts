import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyModule } from './body/body.module';
import { NotFoundModule } from './404/404.module';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BodyModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    NotFoundModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
