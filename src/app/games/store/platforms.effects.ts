import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import * as platformActions from './platforms.actions';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {GetAllPlatformsError, GetAllPlatformsSuccess} from './platforms.actions';
import {PlatformsService} from '../shared/platforms.service';

@Injectable()
export class PlatformEffects {
  constructor(private actions$: Actions, private svc: PlatformsService) {}

  @Effect()
  getAllPlatforms$: Observable < Action > = this
    .actions$
    .ofType(platformActions.GET_PLATFORMS)
    .switchMap(() => this.svc.findAll())
    .map(result => new GetAllPlatformsSuccess(result))
    .catch((err) => [new GetAllPlatformsError(err)]);
}
