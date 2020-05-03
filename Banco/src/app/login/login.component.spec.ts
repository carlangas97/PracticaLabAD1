import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {RegistrarComponent} from '../Componentes/registrar/registrar.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {LoginService} from "../Servicios/login.service";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: LoginService;

  const routes: Routes = [
    { path: 'registro', component: RegistrarComponent },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ FormsModule, RouterTestingModule.withRoutes(routes), HttpClientTestingModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        NoopAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(LoginService);
    fixture.detectChanges();
  });

  describe('When user is login', () => {
    it('should handle error', fakeAsync(() => {
      component.cuenta = 2987949770101;
      component.password = 'Carlos123';
      spyOn(service, 'Login').and.callThrough();
      component.validateLogin();
      tick(1000);
      fixture.detectChanges();
      expect(component.router.navigated).toBeFalsy();
    }));
  });

  describe('register', () => {
    it('should handle error', fakeAsync(() => {
      component.registrar();
      tick(50);
      expect(component.router.navigated).toBeTruthy();
    }));
  });

  describe('open snackbar', () => {
    it('should handle error', fakeAsync(() => {
      spyOn(component.snackBar, 'open');
      component.openSnackBar("Mensaje", "Close");
      expect(component.snackBar.open).toHaveBeenCalledWith('Mensaje', 'Close', {duration: 2000});
    }));
  });

  describe('if password and account are null', () => {
    it('should handle error', fakeAsync(() => {
      component.cuenta = null;
      component.password = '';
      spyOn(component.snackBar, 'open');
      component.validateLogin();
      tick(500);
      expect(component.snackBar.open).toHaveBeenCalledWith('Datos Incorrectos', 'Close', {duration: 2000});
    }));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
