import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Transferencia} from "../Modelos/Transferencia";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {

  private API = 'http://54.200.138.95:3500';

  constructor(private http: HttpClient) { }

  public Transferencia(request: Transferencia){
    return this.http.post(`${this.API}/analisis/transferencia`, request, httpOptions);
  }

}
