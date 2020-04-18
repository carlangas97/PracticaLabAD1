import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RegistrarService} from "../../Servicios/registrar.service";
import {Usuario} from "../../Modelos/Registrar";
import {Login} from "../../Modelos/Login";

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  DPI: number;
  nombre: string;
  apellido: string;
  correo: string;
  pass: string;
  cuenta: number;
  monto: number;
  request: Usuario;
  contra2: string;

  constructor(private registrarService: RegistrarService , public router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void { }
  newUser(DPI, nombre, apellidos, correo, pass, tipo_usuario, no_cuenta, monto): Usuario{
    return{
      DPI,
      nombre,
      apellidos,
      correo,
      pass,
      tipo_usuario,
      no_cuenta,
      monto
    };
  }
  Registrar(){
    this.request = this.newUser(this.DPI, this.nombre, this.apellido, this.correo, this.pass, 1, this.cuenta, this.monto);
    if (this.contra2 === this.pass)
    {

      this.registrarService.Registrar(this.request).subscribe(
        res => {
          this.returnLogin();
        },
        error => console.error(error)
       );
    }
  }

  returnLogin(){
    this.router.navigate(['/login'])
  }

}
