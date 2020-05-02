import { TestBed } from '@angular/core/testing';

import { RegistrarService } from './registrar.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('RegistrarService', () => {
  let service: RegistrarService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    controller = TestBed.inject(HttpTestingController);
    service = TestBed.inject(RegistrarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
