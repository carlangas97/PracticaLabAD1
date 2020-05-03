import {TestBed, async, fakeAsync, ComponentFixture, tick} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {TrabsferenciasComponent} from "./Componentes/trabsferencias/trabsferencias.component";
import {ReportesComponent} from "./Componentes/reportes/reportes.component";
import {MatMenuModule} from "@angular/material/menu";
import {GlobalService} from "./Servicios/global.service";


describe('AppComponent', () => {

  let component: AppComponent;
  let service: GlobalService;
  let fixture: ComponentFixture<AppComponent>;

  const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'transferencias', component: TrabsferenciasComponent },
    { path: 'reportes/:dpi', component: ReportesComponent },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule.withRoutes(routes), HttpClientTestingModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatMenuModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(GlobalService);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Banco'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toBeDefined();
  });

  describe('open snackbar', () => {
    it('should handle error', fakeAsync(() => {
      spyOn(component.snackBar, 'open');
      component.openSnackBar("Mensaje", "Close");
      expect(component.snackBar.open).toHaveBeenCalledWith('Mensaje', 'Close', {duration: 2000});
    }));
  });

  describe('reports', () => {
    it('should handle error', fakeAsync(() => {
      component.reportes();
      tick(50);
      expect(component.router.navigated).toBeTruthy();
    }));
  });

  describe('transfers', () => {
    it('should handle error', fakeAsync(() => {
      component.transferencias();
      tick(50);
      expect(component.router.navigated).toBeTruthy();
    }));
  });

  describe('logout', () => {
    it('should handle error', fakeAsync(() => {
      component.loginout();
      tick(50);
      expect(component.router.navigated).toBeTruthy();
    }));
  });

  describe('test', () => {
    it('should handle error', fakeAsync(() => {
      service.dpis = 1231
      component.tipocambio();
      tick(100);
      expect(component.router.navigated).toBeTruthy();
    }));
  });

  it('should handle error', fakeAsync(() => {
    service.dpis = null
    spyOn(component.snackBar, 'open');
    component.tipocambio();
    tick(100);
    expect(component.snackBar.open).toHaveBeenCalledWith('Iniciar Sesion!!', 'Close', {duration: 2000});
  }));
});
