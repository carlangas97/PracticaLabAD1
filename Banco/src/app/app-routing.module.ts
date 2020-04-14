import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './Componentes/home/home.component';
import {LoginComponent} from './login/login.component';
import {RegistrarComponent} from "./Componentes/registrar/registrar.component";
import {NoPageFoundComponent} from './Componentes/no-page-found/no-page-found.component';


const routes: Routes = [

  {
    path: 'home/:codigo',
    component: HomeComponent
  },
  {
    path: 'registro',
    component: RegistrarComponent
  },
  {
    path: '**',
    component: NoPageFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
