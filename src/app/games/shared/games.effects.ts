import {Injectable} from '@angular/core';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import * as gameActions from './games.actions';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {
  AddGame, AddGameError, AddGameSuccess,
  GetAllGamesError, GetAllGamesSuccess,
  GetGame, GetGameError, GetGameSuccess,
  RemoveGame, RemoveGameError, RemoveGameSuccess,
  UpdateGame, UpdateGameError, UpdateGameSuccess
} from './games.actions';
import {GamesService} from './games.service';
import {Game} from './game';

@Injectable()
export class GameEffects {
  constructor(private actions$: Actions,
              private svc: GamesService) {
  }

  @Effect()
  getAllGames$: Observable<Action> = this.actions$
    .ofType(gameActions.GET_GAMES)
    .switchMap(() => this.svc.findAll())
    .map(heroes => new GetAllGamesSuccess(heroes))
    .catch((err) => [new GetAllGamesError(err)]);

  @Effect()
  getGame$ = this.actions$
    .ofType(gameActions.GET_GAME)
    .map((action: GetGame) => action.payload)
    .switchMap(id => this.svc.findById(id))
    .map(hero => new GetGameSuccess(hero))
    .catch((err) => [new GetGameError(err)]);

  @Effect()
  updateGame$ = this.actions$
    .ofType(gameActions.UPDATE_GAME)
    .map((action: UpdateGame) => action.payload)
    .switchMap(game => this.svc.update(game))
    .map(() => new UpdateGameSuccess())
    .catch((err) => [new UpdateGameError(err)]);

  @Effect()
  createGame$ = this.actions$
    .ofType(gameActions.CREATE_GAME)
    .map((action: AddGame) => action.payload)
    .switchMap(newGame => this.svc.insert(newGame))
    .map((response) => new AddGameSuccess(response.id))
    .catch((err) => [new AddGameError(err)]);

  @Effect()
  removeGame$ = this.actions$
    .ofType(gameActions.DELETE_GAME)
    .map((action: RemoveGame) => action.payload)
    .switchMap(id => this.svc.delete(id))
    .map((hero: Game) => new RemoveGameSuccess(hero))
    .catch((err) => [new RemoveGameError(err)]);
}
