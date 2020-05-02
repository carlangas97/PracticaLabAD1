import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './Componentes/home/home.component';
import { RouterModule } from '@angular/router';
import { NoPageFoundComponent } from './Componentes/no-page-found/no-page-found.component';
import { RegistrarComponent } from './Componentes/registrar/registrar.component';
import {MatGridListModule} from "@angular/material/grid-list";
// import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RegistrarService} from "./Servicios/registrar.service";
import {LoginService} from "./Servicios/login.service";
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NoPageFoundComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    //HttpClientTestingModule,
    MatGridListModule,
    MatMenuModule,
  ],
  providers: [
    RegistrarService,
    LoginService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
