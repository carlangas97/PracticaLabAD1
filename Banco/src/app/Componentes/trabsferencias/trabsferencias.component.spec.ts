import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { TrabsferenciasComponent } from './trabsferencias.component';
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {Routes} from "@angular/router";
import {LoginComponent} from "../../login/login.component";
import {HomeComponent} from "../home/home.component";
import {MatMenuModule} from "@angular/material/menu";
import {GlobalService} from "../../Servicios/global.service";

describe('TrabsferenciasComponent', () => {
  let component: TrabsferenciasComponent;
  let fixture: ComponentFixture<TrabsferenciasComponent>;
  let service: GlobalService;

  const routes: Routes = [
    { path: 'home/:dpi', component: HomeComponent },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabsferenciasComponent ],
      imports: [ FormsModule, RouterTestingModule.withRoutes(routes), HttpClientTestingModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        NoopAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabsferenciasComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(GlobalService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('open snackbar', () => {
    it('should open', fakeAsync(() => {
      spyOn(component.snackBar, 'open');
      component.openSnackBar("Mensaje", "Close");
      expect(component.snackBar.open).toHaveBeenCalledWith('Mensaje', 'Close', {duration: 2000});
    }));
  });

  describe('return to home', () => {
    it('should return', fakeAsync(() => {
      component.Regresar();
      tick(50);
      expect(component.router.navigated).toBeTruthy();
    }));
  });

  describe('transfer money', () => {
    it('should transfer', fakeAsync(() => {
      component.Saldo = 50;
      component.Monto = 25
      component.Salida = 1321
      component.Entrada = 1234
      component.Transferir();
      tick(50);
      expect(true).toBeFalsy();
    }));
  });

  describe('if amount is greater than money', () => {
    it('should handle error', fakeAsync(() => {
      component.Saldo = 50;
      component.Monto = 75
      component.Salida = 1321
      component.Entrada = 1234
      spyOn(component.snackBar, 'open');
      component.Transferir();
      tick(100);
      expect(component.snackBar.open).toHaveBeenCalledWith('Saldo insuficiente', '', {duration: 2000});
    }));
  });

  describe('if amount is 0', () => {
    it('should handle error', fakeAsync(() => {
      component.Saldo = 50;
      component.Monto = 0
      component.Salida = 1321
      component.Entrada = 1234
      spyOn(component.snackBar, 'open');
      component.Transferir();
      tick(50);
      expect(component.snackBar.open).toHaveBeenCalledWith('Ingresar una cantidad', '', {duration: 2000});
    }));
  });
});
