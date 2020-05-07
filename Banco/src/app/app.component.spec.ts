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
import {HomeComponent} from "./Componentes/home/home.component";


describe('AppComponent', () => {

  let component: AppComponent;
  let service: GlobalService;
  let fixture: ComponentFixture<AppComponent>;

  const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'transferencias', component: TrabsferenciasComponent },
    { path: 'reportes/:dpi', component: ReportesComponent },
    { path: 'home/:dpi', component: HomeComponent },
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
    it('should redirect', fakeAsync(() => {
      service.dpis = 123
      component.reportes();
      tick(50);
      expect(component.router.navigated).toBeTruthy();
    }));
  });

  describe('transfers', () => {
    it('should redirect', fakeAsync(() => {
      service.dpis = 123
      component.transferencias();
      tick(50);
      expect(component.router.navigated).toBeTruthy();
    }));
  });

  describe('logout', () => {
    it('should redirect', fakeAsync(() => {
      component.loginout();
      tick(50);
      expect(component.router.navigated).toBeTruthy();
    }));
  });

  describe('test', () => {
    it('should handle error', fakeAsync(() => {
      service.dpis = 1231
      spyOn(component.snackBar, 'open');
      component.tipocambio();
      tick(100);
      expect(component.snackBar.open).toHaveBeenCalledWith('Opcion no disponible por el momento', '', {duration: 2000});
    }));
  });

  it('should redirect to home', fakeAsync(() => {
    service.dpis = null
    component.homis();
    tick(100);
    expect(component.router.navigated).toBeTruthy();
  }));
});
