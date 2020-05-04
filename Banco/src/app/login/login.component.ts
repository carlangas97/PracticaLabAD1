import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {Login} from '../Modelos/Login';
import {LoginService} from '../Servicios/login.service';
import {GlobalService} from '../Servicios/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cuenta: number;
  password: string;
  hide = true;
  request: Login;
  codigo: number;
  datos: any
  constructor(private loginService: LoginService, public router: Router, public snackBar: MatSnackBar, public  global: GlobalService) { }

  ngOnInit(): void {
  }

  newLogin(DPI, pass): Login{
    return{
      DPI,
      pass
    };
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  validateLogin() {

    if (this.password !== '' && this.cuenta) {
      console.log("Haciendo prueba")
      this.request = this.newLogin(this.cuenta, this.password);
      this.loginService.Login(this.request).subscribe(
        res => {
          console.log(res);
          this.datos = res;
          this.GuardarDatos(res);
        },
        error => console.error('error')
      );
    }else {
      this.openSnackBar('Datos Incorrectos', 'Close');
    }
    console.log("Fin prueba")
  }

  registrar(){
    this.router.navigate([`/registro`]);
  }

  GuardarDatos(res){
    if(res !== false){
      this.global.dpis = this.cuenta;
      this.global.codigo = this.datos[0].codigo_usuario;
      this.global.saldo = this.datos[0].saldo_cuenta;
      this.router.navigate([`/home/${this.cuenta}`]);
      // this.openSnackBar('nitido', 'Close');
    }
    else{
      this.openSnackBar('Datos Incorrectos', 'Close');
    }
  }
}
