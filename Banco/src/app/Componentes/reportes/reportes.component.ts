import { Component, OnInit } from '@angular/core';
import {TransferenciasService} from "../../Servicios/transferencias.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {GlobalService} from "../../Servicios/global.service";
import {ReportesService} from "../../Servicios/reportes.service";

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})

export class ReportesComponent implements OnInit {

  constructor(private reportesService: ReportesService, public router: Router, public snackBar: MatSnackBar, public global: GlobalService) {}

  tipo: number
  respuesta: any
  info: any
  displayedColumns: string[] = ['fecha', 'cuenta_salida', 'cuenta_entrada', 'monto'];
  dataSource: any

  ngOnInit(): void {
    this.ObtenerTipo()
  }

  ObtenerTipo() {
    this.reportesService.GetTipo().subscribe(
      res => {
        console.log(res);
        this.respuesta = res
        this.tipo = this.respuesta[0].tipo_usuario
        if (this.tipo = 1) {
           this.reportesService.ReporteUsuario().subscribe(
            res => {
              this.dataSource = res;
            }
          )
        } else {
          this.reportesService.ReporteGeneral().subscribe(
          res => {
            this.dataSource = res;
          }
        )
        }
      }
    )
  }
}
