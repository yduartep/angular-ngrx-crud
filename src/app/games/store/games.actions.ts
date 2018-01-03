import {Action} from '@ngrx/store';
import {Game} from '../shared/game';

export const GET_GAMES = '[ALL] Games';
export const GET_GAMES_SUCCESS = '[ALL] Games Success';
export const GET_GAMES_ERROR = '[ALL] Games Error';

export const GET_GAME = '[GET] Game';
export const GET_GAME_SUCCESS = '[GET] Games Success';
export const GET_GAME_ERROR = '[GET] Games Error';

export const CREATE_GAME = '[CREATE] Game';
export const CREATE_GAME_SUCCESS = '[CREATE] Game Success';
export const CREATE_GAME_ERROR = '[CREATE] Game Error';

export const DELETE_GAME = '[DELETE] Game';
export const DELETE_GAME_SUCCESS = '[DELETE] Game Success';
export const DELETE_GAME_ERROR = '[DELETE] Game Error';

export const UPDATE_GAME = '[UPDATE] Game';
export const UPDATE_GAME_SUCCESS = '[UPDATE] Game Success';
export const UPDATE_GAME_ERROR = '[UPDATE] Game Error';

/****************************************
 * GET all the games
 ****************************************/
export class GetAllGames implements Action {
  readonly type = GET_GAMES;
}

export class GetAllGamesSuccess implements Action {
  readonly type = GET_GAMES_SUCCESS;

  constructor(public payload: Game[]) {
  }
}

export class GetAllGamesError implements Action {
  readonly type = GET_GAMES_ERROR;

  constructor(public payload: Error) {
  }
}

/****************************************
 * GET game by id
 ****************************************/
export class GetGame implements Action {
  readonly type = GET_GAME;

  constructor(public payload: number) {
  }
}

export class GetGameSuccess implements Action {
  readonly type = GET_GAME_SUCCESS;

  constructor(public payload: Game) {
  }
}

export class GetGameError implements Action {
  readonly type = GET_GAME_ERROR;

  constructor(public payload: Error) {
  }
}

/****************************************
 * ADD new game
 ****************************************/
export class AddGame implements Action {
  readonly type = CREATE_GAME;

  constructor(public payload: Game) {
  }
}

export class AddGameSuccess implements Action {
  readonly type = CREATE_GAME_SUCCESS;

  constructor(public payload: number) {
  }
}

export class AddGameError implements Action {
  readonly type = CREATE_GAME_ERROR;

  constructor(public payload: Error) {
  }
}

/****************************************
 * REMOVE a game by id
 ****************************************/
export class RemoveGame implements Action {
  readonly type = DELETE_GAME;

  constructor(public payload: number) {
  }
}

export class RemoveGameSuccess implements Action {
  readonly type = DELETE_GAME_SUCCESS;

  constructor(public payload: Game) {
  }
}

export class RemoveGameError implements Action {
  readonly type = DELETE_GAME_ERROR;

  constructor(public payload: Error) {
  }
}

/****************************************
 * UPDATE game by id
 ****************************************/
export class UpdateGame implements Action {
  readonly type = UPDATE_GAME;

  constructor(public payload: Game) {
  }
}

export class UpdateGameSuccess implements Action {
  readonly type = UPDATE_GAME_SUCCESS;
}

export class UpdateGameError implements Action {
  readonly type = UPDATE_GAME_ERROR;

  constructor(public payload: Error) {
  }
}
