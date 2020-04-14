import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Usuario} from '../Modelos/Registrar';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class RegistrarService {
  private API = 'http://54.200.138.95:3500/';

  constructor(private http: HttpClient) { }

  public Registrar(request: Usuario){
    return this.http.post(`${this.API}analisis/create-user`, request, httpOptions);
  }
}
