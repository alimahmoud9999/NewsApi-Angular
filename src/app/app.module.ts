import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }  from "@angular/common/http";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SportComponent } from './sport/sport.component';
import { SportService } from './services/sport.service';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SportComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule

  ],
  providers: [SportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
