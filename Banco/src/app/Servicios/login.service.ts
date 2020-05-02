import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Login} from '../Modelos/Login'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private API = 'http://54.200.138.95:3500';

  constructor(private http: HttpClient) { }

  public Login(request: Login){
    console.log("Probando el server")
    return this.http.post(`${this.API}/analisis/login-user`, request, httpOptions);
  }

}
