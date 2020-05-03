import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {GlobalService} from "./global.service";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ReportesService {
  private API = 'http://54.200.138.95:3500';

  constructor(private http: HttpClient, public global: GlobalService) { }
  tipo: number

  public GetTipo(){
    return this.http.get(`${this.API}/analisis/account/get-tipo/${this.global.dpis}`, httpOptions);
  }

  public ReporteUsuario(){
    return this.http.get(`${this.API}/analisis/transfer/account-report/${this.global.codigo}`, httpOptions);
  }

  public ReporteGeneral(){
    return this.http.get(`${this.API}/analisis/transfer/general-report`, httpOptions);
  }
}
