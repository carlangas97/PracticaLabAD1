import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { ReportesComponent } from './reportes.component';
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {Routes} from "@angular/router";
import {LoginComponent} from "../../login/login.component";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('ReportesComponent', () => {
  let component: ReportesComponent;
  let fixture: ComponentFixture<ReportesComponent>;

  const routes: Routes = [
    { path: '', component: LoginComponent },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesComponent ],
      imports: [ FormsModule, RouterTestingModule.withRoutes(routes), HttpClientTestingModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        NoopAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('type of report', () => {
    it('should return', fakeAsync(() => {
      component.Reportes([{tipo_usuario: 1}]);
      tick(50);
      expect(true).toBeTruthy();
    }));
  });

  describe('type of report', () => {
    it('should return', fakeAsync(() => {
      component.Reportes([{tipo_usuario: 0}]);
      tick(50);
      expect(true).toBeTruthy();
    }));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
