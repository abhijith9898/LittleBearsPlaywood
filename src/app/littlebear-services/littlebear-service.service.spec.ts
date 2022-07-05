import { TestBed } from '@angular/core/testing';

import { LittlebearServiceService } from './littlebear-service.service';

describe('LittlebearServiceService', () => {
  let service: LittlebearServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LittlebearServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
