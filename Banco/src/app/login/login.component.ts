import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {Login} from '../Modelos/Login';
import {LoginService} from '../Servicios/login.service';


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

  constructor(private loginService: LoginService, private router: Router, private snackBar: MatSnackBar) { }

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
      this.request = this.newLogin(this.cuenta, this.password);
      this.loginService.Login(this.request).subscribe(
        res =>{
          console.log(res);
          if(res !== false){
            this.router.navigate([`/home/${this.codigo}`]);
            // this.openSnackBar('nitido', 'Close');
          }
          else{
            this.openSnackBar('Datos Incorrectos', 'Close');
          }
        },
        error => console.error('error')
      );
    }
  }
}
