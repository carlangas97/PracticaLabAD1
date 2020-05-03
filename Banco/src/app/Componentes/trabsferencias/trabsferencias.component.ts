import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {GlobalService} from "../../Servicios/global.service";
import {TransferenciasService} from "../../Servicios/transferencias.service";
import {Transferencia} from "../../Modelos/Transferencia";
import {Usuario} from "../../Modelos/Registrar";


@Component({
  selector: 'app-trabsferencias',
  templateUrl: './trabsferencias.component.html',
  styleUrls: ['./trabsferencias.component.css']
})
export class TrabsferenciasComponent implements OnInit {

  constructor(private transferenciasService: TransferenciasService, public router: Router, public snackBar: MatSnackBar, public global: GlobalService) { }

  Salida: number
  Entrada: number
  Monto: number
  Saldo: number
  request: Transferencia;


  ngOnInit(): void {
    this.Salida = this.global.codigo
    this.Saldo = this.global.saldo
    console.log(this.Salida)
  }

  newTrans(cuenta1, cuenta2, monto): Transferencia{
    return{
      cuenta1,
      cuenta2,
      monto,
    };
  }

  Transferir(){
    if (this.Saldo < this.Monto)
    {
      this.openSnackBar('Saldo insuficiente', '');
    }else if(this.Monto == 0)
    {
      this.openSnackBar('Ingresar una cantidad', '');
    }
    else
    {
      console.log(this.Salida, this.Entrada, this.Monto)
      this.request = this.newTrans(this.Salida, this.Entrada, this.Monto);
      console.log(this.request)
      this.transferenciasService.Transferencia(this.request).subscribe(
        res => {
          console.log(res);
          this.Entrada = null;
          this.Monto = null;
          this.openSnackBar('Transferencia exitosa', '');

        }, error => {
          this.openSnackBar(error, '');
        }
      )
    }

  }

  Regresar(){
    this.router.navigate([`/home/${this.global.dpis}`]);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
