import { TestBed, inject } from '@angular/core/testing';

import { PlatformsService } from './platforms.service';
import {HttpClientModule} from '@angular/common/http';

describe('PlatformsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [PlatformsService]
    });
  });

  it('should be created', inject([PlatformsService], (service: PlatformsService) => {
    expect(service).toBeTruthy();
  }));
});
