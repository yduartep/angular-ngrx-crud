import {async, TestBed, inject, getTestBed} from '@angular/core/testing';

import {GamesService} from './games.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import {BrowserModule} from '@angular/platform-browser';
import {Game} from './game';

const BASE_URL = 'http://localhost:3000/api/games';
const MOCK_DATA: Game[] = [
  {
    id: 1,
    image: 'picture.jpg',
    name: 'Game 1',
    releaseDate: new Date(),
    platforms: [1],
    description: 'Descripion of Game 1'
  }, {
    id: 2,
    image: 'picture2.jpg',
    name: 'Game 2',
    releaseDate: new Date(),
    platforms: [2],
    description: 'Descripion of Game 2'
  }
];

describe('GamesService', () => {
  let injector: TestBed;
  let service: GamesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule, HttpClientModule, HttpClientTestingModule
      ],
      providers: [GamesService]
    });

    injector = getTestBed();
    service = injector.get(GamesService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', inject([GamesService], (svg: GamesService) => {
    expect(svg).toBeTruthy();
  }));

  it('should get list of all games', async(() => {
    service
      .findAll()
      .subscribe((data: Game[]) => {
        expect(data.length).toBe(2);
        expect(data[0]).toBe(MOCK_DATA[0]);
        expect(data[1]).toBe(MOCK_DATA[1]);
      });

    const req = httpMock.expectOne(BASE_URL);
    expect(req.request.method).toBe('GET');
    req.flush(MOCK_DATA);
  }));

  it('should get game by id', async(() => {
    const id = 1;
    service
      .findById(id)
      .subscribe((response: Game) => {
        expect(response).toBe(MOCK_DATA[0]);
      });

    const req = httpMock.expectOne(`${BASE_URL}/${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(MOCK_DATA[0]);
  }));

  it('should insert new Game', async(() => {
    const newGame = {
      id: 3,
      image: 'picture3.jpg',
      name: 'Game 3',
      releaseDate: new Date(),
      platforms: [1, 2],
      description: 'Descripion of Game 3'
    };
    service
      .insert(newGame)
      .subscribe((successResult) => {
        expect(successResult).toBe(newGame);
      });

    const req: TestRequest = httpMock.expectOne(BASE_URL);
    expect(req.request.method).toBe('POST');
    expect(req.request.headers.get('Content-Type')).toBe('application/json; charset=utf-8');
    req.flush(newGame);
  }));

  it('should save updates to an existing game', async(() => {
    const game = {
      ...MOCK_DATA[1],
      name: 'Game 2 changed',
      image: 'imageChanged.jpg'
    };
    const id = game.id;
    service
      .update(game)
      .subscribe((successResult) => {
        expect(successResult).toBe(game);
      });

    const req: TestRequest = httpMock.expectOne(`${BASE_URL}/${id}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.headers.get('Content-Type')).toBe('application/json; charset=utf-8');
    req.flush(game);
  }));

  it('should delete an existing Game', async(() => {
    const data = MOCK_DATA[1];
    service
      .delete(data.id)
      .subscribe((successResult) => {
        expect(successResult).toBe(data);
      }, (errorResult) => {
        throw(errorResult);
      });

    const req: TestRequest = httpMock.expectOne(`${BASE_URL}/${data.id}`);
    expect(req.request.method).toBe('DELETE');
  }));
});
