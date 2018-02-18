import {TestBed, async} from '@angular/core/testing';
import {Actions} from '@ngrx/effects';
import {EffectsModule} from '@ngrx/effects';
import {cold} from 'jasmine-marbles';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import { Platform } from '../shared/platform';
import { PlatformEffects } from './platforms.effects';
import { GET_PLATFORMS, GetAllPlatformsSuccess, GetAllPlatformsError } from './platforms.actions';

const MOCK_DATA: Platform[] = [
  {
      'id': 1,
      'name': 'Xbox One',
      checked: false
  }, {
      'id': 2,
      'name': 'PlayStation 4',
      checked: false
  }, {
      'id': 3,
      'name': 'PC',
      checked: false
  }
];

describe('PlatformEffects', () => {
  let service: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PlatformEffects
      ]
    });
    service = jasmine.createSpyObj('svc', ['findAll']);
  });

  describe('getAllPlatforms$', () => {
    it('should return a GET_PLATFORMS_SUCCESS action, with the platforms, on success', () => {
      service.findAll.and.returnValue(Observable.of(MOCK_DATA));
      const source = cold('a', {a: {type: GET_PLATFORMS}});
      const effects = new PlatformEffects(new Actions(source), service);
      const expected = cold('a', {a: new GetAllPlatformsSuccess(MOCK_DATA)});

      expect(effects.getAllPlatforms$).toBeObservable(expected);
    });

    it('should return a GET_PLATFORMS_ERROR action, with the error', () => {
      const error = new Error('Error loading platforms');
      service.findAll.and.returnValue(Observable.throw(error));

      const source = cold('a', {a: {type: GET_PLATFORMS}});
      const effects = new PlatformEffects(new Actions(source), service);

      effects.getAllPlatforms$.subscribe(result => {
        expect(result).toEqual(new GetAllPlatformsError(error));
      });
    });
  });

});
