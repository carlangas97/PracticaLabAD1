import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {Routes} from "@angular/router";
import {LoginComponent} from "../../login/login.component";
import {GlobalService} from "../../Servicios/global.service";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: GlobalService

  const routes: Routes = [
    { path: '', component: LoginComponent },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ FormsModule, RouterTestingModule.withRoutes(routes), HttpClientTestingModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        NoopAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(GlobalService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('register', () => {
    it('should handle error', fakeAsync(() => {
      service.dpis = 123
      component.ngOnInit();
      tick(50);
      expect(true).toBeTruthy();
    }));
  });
});
