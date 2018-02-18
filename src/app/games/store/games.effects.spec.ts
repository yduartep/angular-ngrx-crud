import {TestBed, async} from '@angular/core/testing';
import {Actions} from '@ngrx/effects';
import {EffectsModule} from '@ngrx/effects';
import {GameEffects} from './games.effects';
import {GamesService} from '../shared/games.service';
import {cold} from 'jasmine-marbles';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import {
  GET_GAMES_SUCCESS,
  GET_GAMES,
  GetAllGamesSuccess,
  GetAllGamesError,
  GET_GAME,
  GetGameSuccess,
  GetGameError,
  UPDATE_GAME,
  UpdateGameSuccess,
  UpdateGameError,
  CREATE_GAME,
  AddGameSuccess,
  AddGameError,
  DELETE_GAME,
  RemoveGameSuccess,
  RemoveGameError
} from './games.actions';
import {Game} from '../shared/game';

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

describe('GameEffects', () => {
  let service: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GameEffects
      ]
    });
    service = jasmine.createSpyObj('svc', ['findAll', 'findById', 'update', 'insert', 'delete']);
  });

  describe('getAllGames$', () => {
    it('should return a GET_GAMES_SUCCESS action, with the games, on success', () => {
      service.findAll.and.returnValue(Observable.of(MOCK_DATA));
      const source = cold('a', {a: {type: GET_GAMES}});
      const effects = new GameEffects(new Actions(source), service);
      const expected = cold('a', {a: new GetAllGamesSuccess(MOCK_DATA)});

      expect(effects.getAllGames$).toBeObservable(expected);
    });

    it('should return a GET_GAMES_ERROR action, with the error', () => {
      const error = new Error('Error loading games');
      service.findAll.and.returnValue(Observable.throw(error));

      const source = cold('a', {a: {type: GET_GAMES}});
      const effects = new GameEffects(new Actions(source), service);

      effects.getAllGames$.subscribe(result => {
        expect(result).toEqual(new GetAllGamesError(error));
      });
    });
  });

  describe('getGame$', () => {
    it('should return a GET_GAME_SUCCESS action, with the game found, on success', () => {
      const data = MOCK_DATA[0];
      service.findById.and.returnValue(Observable.of(data));
      const source = cold('a', {a: {type: GET_GAME}});
      const effects = new GameEffects(new Actions(source), service);
      const expected = cold('a', {a: new GetGameSuccess(data)});

      expect(effects.getGame$).toBeObservable(expected);
    });

    it('should return a GET_GAME_ERROR action, with the error', () => {
      const data = MOCK_DATA[0];
      const error = new Error(`Error loading the game with id ${data.id}`);
      service.findById.and.returnValue(Observable.throw(error));

      const source = cold('a', {a: {type: GET_GAME}});
      const effects = new GameEffects(new Actions(source), service);

      effects.getGame$.subscribe(result => {
        expect(result).toEqual(new GetGameError(error));
      });
    });
  });

  describe('updateGame$', () => {
    it('should return a UPDATE_GAME_SUCCESS action, without any data', () => {
      const data = {...MOCK_DATA[0], description: 'Description updated'};
      service.update.and.returnValue(Observable.of(data));
      const source = cold('a', {a: {type: UPDATE_GAME}});
      const effects = new GameEffects(new Actions(source), service);
      const expected = cold('a', {a: new UpdateGameSuccess()});

      expect(effects.updateGame$).toBeObservable(expected);
    });

    it('should return a UPDATE_GAME_ERROR action, with the error', () => {
      const data = {...MOCK_DATA[0], description: 'Description updated'};
      const error = new Error(`Error updating the game with id ${data.id}`);
      service.update.and.returnValue(Observable.throw(error));

      const source = cold('a', {a: {type: UPDATE_GAME}});
      const effects = new GameEffects(new Actions(source), service);

      effects.updateGame$.subscribe(result => {
        expect(result).toEqual(new UpdateGameError(error));
      });
    });
  });

  describe('createGame$', () => {
    it('should return a CREATE_GAME_SUCCESS action, with the game inserted, on success', () => {
      const data = {
        id: 3,
        image: 'picture3.jpg',
        name: 'Game 3',
        releaseDate: new Date(),
        platforms: [1, 2],
        description: 'Descripion of Game 3'
      };
      service.insert.and.returnValue(Observable.of(data));
      const source = cold('a', {a: {type: CREATE_GAME}});
      const effects = new GameEffects(new Actions(source), service);
      const expected = cold('a', {a: new AddGameSuccess(data.id)});

      expect(effects.createGame$).toBeObservable(expected);
    });

    it('should return a CREATE_GAME_ERROR action, with the error', () => {
      const data = {
        id: 3,
        image: 'picture3.jpg',
        name: 'Game 3',
        releaseDate: new Date(),
        platforms: [1, 2],
        description: 'Descripion of Game 3'
      };
      const error = new Error(`Error adding new game with id ${data.id}`);
      service.insert.and.returnValue(Observable.throw(error));

      const source = cold('a', {a: {type: CREATE_GAME}});
      const effects = new GameEffects(new Actions(source), service);

      effects.createGame$.subscribe(result => {
        expect(result).toEqual(new AddGameError(error));
      });
    });
  });

  describe('removeGame$', () => {
    it('should return a DELETE_GAME_SUCCESS action, with the game deleted, on success', () => {
      const data = MOCK_DATA[1];
      service.delete.and.returnValue(Observable.of(data));
      const source = cold('a', {a: {type: DELETE_GAME}});
      const effects = new GameEffects(new Actions(source), service);
      const expected = cold('a', {a: new RemoveGameSuccess(data)});

      expect(effects.removeGame$).toBeObservable(expected);
    });

    it('should return a DELETE_GAME_ERROR action, with the error', () => {
      const data = MOCK_DATA[1];
      const error = new Error(`Error removing the game with id ${data.id}`);
      service.delete.and.returnValue(Observable.throw(error));

      const source = cold('a', {a: {type: DELETE_GAME}});
      const effects = new GameEffects(new Actions(source), service);

      effects.removeGame$.subscribe(result => {
        expect(result).toEqual(new RemoveGameError(error));
      });
    });
  });
});
