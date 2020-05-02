import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('LoginService', () => {
  let service: LoginService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    controller = TestBed.inject(HttpTestingController);
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
