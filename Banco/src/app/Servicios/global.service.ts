import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public dpis: number;
  public codigo: number;
  public saldo: number;

  constructor() { }
}
