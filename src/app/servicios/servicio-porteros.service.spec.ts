import { TestBed } from '@angular/core/testing';

import { ServicioPorterosService } from './servicio-porteros.service';

describe('ServicioPorterosService', () => {
  let service: ServicioPorterosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPorterosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
