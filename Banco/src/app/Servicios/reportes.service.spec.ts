import { TestBed } from '@angular/core/testing';

import { ReportesService } from './reportes.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('ReportesService', () => {
  let service: ReportesService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    controller = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ReportesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
