import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './Componentes/home/home.component';
import {LoginComponent} from './login/login.component';
import {RegistrarComponent} from "./Componentes/registrar/registrar.component";
import {NoPageFoundComponent} from './Componentes/no-page-found/no-page-found.component';
import {TrabsferenciasComponent} from "./Componentes/trabsferencias/trabsferencias.component";
import {ReportesComponent} from "./Componentes/reportes/reportes.component";


const routes: Routes = [

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home/:codigo',
    component: HomeComponent
  },
  {
    path: 'registro',
    component: RegistrarComponent
  },
  {
    path: 'transferencias',
    component: TrabsferenciasComponent
  },
  {
    path: 'reportes/:codigo',
    component: ReportesComponent
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
