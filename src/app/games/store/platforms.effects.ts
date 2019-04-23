import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as platformActions from './platforms.actions';
import {GetAllPlatformsError, GetAllPlatformsSuccess} from './platforms.actions';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {PlatformsService} from '../shared/platforms.service';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable()
export class PlatformEffects {
  constructor(private actions$: Actions, private svc: PlatformsService) {
  }

  @Effect()
  getAllPlatforms$: Observable<Action> = this
    .actions$.pipe(
      ofType(platformActions.GET_PLATFORMS),
      switchMap(() => this.svc.findAll()),
      map(result => new GetAllPlatformsSuccess(result)),
      catchError((err) => [new GetAllPlatformsError(err)])
    );
}
