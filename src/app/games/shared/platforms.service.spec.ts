import {async, getTestBed, inject, TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {BrowserModule} from '@angular/platform-browser';
import {Platform} from './platform';
import {PlatformsService} from './platforms.service';

const BASE_URL = 'http://localhost:3000/api/platforms';
const MOCK_DATA: Platform[] = [
  {
    id: 1,
    name: 'Xbox One',
    checked: false
  }, {
    id: 2,
    name: 'PlayStation 4',
    checked: false
  }, {
    id: 3,
    name: 'PC',
    checked: false
  }
];

describe('GamesService', () => {
  let injector: TestBed;
  let service: PlatformsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule, HttpClientModule, HttpClientTestingModule
      ],
      providers: [PlatformsService]
    });

    injector = getTestBed();
    service = injector.get(PlatformsService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', inject([PlatformsService], (svg: PlatformsService) => {
    expect(svg).toBeTruthy();
  }));

  it('should get list of all platforms', async(() => {
    service
      .findAll()
      .subscribe((data: Platform[]) => {
        expect(data).toBe(MOCK_DATA);
      });

    const req = httpMock.expectOne(BASE_URL);
    expect(req.request.method).toBe('GET');
    req.flush(MOCK_DATA);
  }));
});
