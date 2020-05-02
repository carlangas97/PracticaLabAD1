import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../Servicios/global.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public global: GlobalService, public snackBar: MatSnackBar, public router: Router) { }

  ngOnInit(): void {
    if (this.global.dpis){
      console.log("si hay ");
      return;
    }else {
      this.openSnackBar('Iniciar Sesion!!', 'Close');
      this.router.navigate([`/`]);
    }
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
