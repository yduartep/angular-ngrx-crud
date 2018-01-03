import { TestBed, inject } from '@angular/core/testing';

import { GamesService } from './games.service';
import {HttpClientModule} from '@angular/common/http';

describe('GamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [GamesService]
    });
  });

  it('should be created', inject([GamesService], (service: GamesService) => {
    expect(service).toBeTruthy();
  }));
});
