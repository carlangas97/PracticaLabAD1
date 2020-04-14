import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './Componentes/home/home.component';
import {LoginComponent} from './login/login.component';
import {NoPageFoundComponent} from './Componentes/no-page-found/no-page-found.component';


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
    path: '**',
    component: NoPageFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
