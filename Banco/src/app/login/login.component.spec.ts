import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {RegistrarComponent} from '../Componentes/registrar/registrar.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const routes: Routes = [
    { path: 'registrar', component: RegistrarComponent },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ FormsModule, RouterTestingModule.withRoutes(routes)]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('When user is login', () => {
    it('should handle error', fakeAsync(() => {
      component.cuenta = 123456789;
      component.password = 'usuario';
      component.validateLogin();
      tick(50);
      expect(component.router.navigated).toBeTruthy();
    }));
  });

  describe('register', () => {
    it('should handle error', fakeAsync(() => {
      component.registrar();
      tick(50);
      expect(component.router.navigated).toBeTruthy();
    }));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
