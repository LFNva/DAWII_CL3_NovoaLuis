import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { Pregunta01Component } from './dashboard/pregunta01/pregunta01.component';
import { Pregunta02Component } from './dashboard/pregunta02/pregunta02.component';
import { Pregunta03Component } from './dashboard/pregunta03/pregunta03.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Pregunta01Component,
    Pregunta02Component,
    Pregunta03Component,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'dashboard', component:DashboardComponent, children:[
        {path: 'home', component:HomeComponent},
        {path: 'pregunta01', component:Pregunta01Component},
        {path: 'pregunta02', component:Pregunta02Component},
        {path: 'pregunta03', component:Pregunta03Component},
      ]},
      {path: '', redirectTo:'dashboard/ home', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
