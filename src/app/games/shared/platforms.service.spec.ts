import { TestBed, inject } from '@angular/core/testing';

import { PlatformsService } from './platforms.service';

describe('PlatformsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlatformsService]
    });
  });

  it('should be created', inject([PlatformsService], (service: PlatformsService) => {
    expect(service).toBeTruthy();
  }));
});
