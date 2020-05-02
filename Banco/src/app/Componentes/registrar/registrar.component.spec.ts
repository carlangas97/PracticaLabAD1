import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { RegistrarComponent } from './registrar.component';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {Routes} from '@angular/router';
import {LoginComponent} from '../../login/login.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";

describe('RegistrarComponent', () => {
  let component: RegistrarComponent;
  let fixture: ComponentFixture<RegistrarComponent>;

  const routes: Routes = [
    { path: 'login', component: LoginComponent },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarComponent, LoginComponent ],
      imports:[ FormsModule, RouterTestingModule.withRoutes(routes), HttpClientTestingModule, MatSnackBarModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('user register', () => {
    it('should handle error', fakeAsync(() => {
      component.DPI = 64545;
      component.nombre = 'asdf';
      component.apellido = 'asdf';
      component.pass = 'aaaaa';
      component.cuenta = 12;
      component.monto = 12;
      component.contra2 = '';
      component.Registrar();
      tick(100);
      expect(component.router.navigated).toBeFalsy();
    }));
  });

  describe('user register error', () => {
    it('should handle error', fakeAsync(() => {
      component.DPI = 1234564;
      component.nombre = '';
      component.apellido = '';
      component.Registrar();
      tick(100);
      expect(component.router.navigated).toBeFalsy();
    }));
  });

  describe('return to login', () => {
    it('should handle error', fakeAsync(() => {
      component.returnLogin();
      tick(100);
      expect(component.router.navigated).toBeTruthy();
    }));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
