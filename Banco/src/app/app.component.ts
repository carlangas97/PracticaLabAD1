import { Component } from '@angular/core';
import {GlobalService} from '../app/Servicios/global.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Banco';

  constructor(public global: GlobalService, public snackBar: MatSnackBar, public router: Router) { }

  prueba(){
    if (this.global.dpis){
      console.log("si hay ");
      return;
    }else {
      this.openSnackBar('Iniciar Sesion!!', 'Close');
    }
  }

  loginout(){
    this.global.dpis = null;
    this.router.navigate([`/`]);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  tipocambio(){
    this.prueba();
    this.openSnackBar('Opcion no disponible por el momento', '');
  }

  transferencias(){
    this.prueba();
    this.router.navigate(['/transferencias']) // Ventana de transferencias
  }

  reportes(){
    this.prueba();
    this.router.navigate([`/reportes/${this.global.dpis}`]) // Ventana de reporte de transferencias
  }

  homis(){
    this.prueba();
    this.router.navigate([`/home/${this.global.dpis}`]);
  }

}
