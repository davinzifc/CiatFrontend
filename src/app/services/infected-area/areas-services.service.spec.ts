import { TestBed } from '@angular/core/testing';

import { AreasServicesService } from './areas-services.service';

describe('AreasServicesService', () => {
  let service: AreasServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreasServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
