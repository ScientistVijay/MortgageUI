import { TestBed } from '@angular/core/testing';

import { PolicyserviceService } from './policyservice.service';

describe('PolicyserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PolicyserviceService = TestBed.get(PolicyserviceService);
    expect(service).toBeTruthy();
  });
});
