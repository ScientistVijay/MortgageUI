import { TestBed } from '@angular/core/testing';

import { SericePolicyService } from './serice-policy.service';

describe('SericePolicyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SericePolicyService = TestBed.get(SericePolicyService);
    expect(service).toBeTruthy();
  });
});
