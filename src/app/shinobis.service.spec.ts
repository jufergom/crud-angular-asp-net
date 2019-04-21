import { TestBed } from '@angular/core/testing';

import { ShinobisService } from './shinobis.service';

describe('ShinobisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShinobisService = TestBed.get(ShinobisService);
    expect(service).toBeTruthy();
  });
});
