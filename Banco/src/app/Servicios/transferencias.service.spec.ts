import { TestBed } from '@angular/core/testing';

import { TransferenciasService } from './transferencias.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('TransferenciasService', () => {
  let service: TransferenciasService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    controller = TestBed.inject(HttpTestingController);
    service = TestBed.inject(TransferenciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
