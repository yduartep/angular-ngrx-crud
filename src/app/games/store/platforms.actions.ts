import {Action} from '@ngrx/store';
import {Game} from '../shared/game';
import {Platform} from "../shared/platform";

export const GET_PLATFORMS = '[ALL] Platforms';
export const GET_PLATFORMS_SUCCESS = '[ALL] Platforms Success';
export const GET_PLATFORMS_ERROR = '[ALL] Platforms Error';

/****************************************
 * GET all the platforms
 ****************************************/
export class GetAllPlatforms implements Action {
  readonly type = GET_PLATFORMS;
}

export class GetAllPlatformsSuccess implements Action {
  readonly type = GET_PLATFORMS_SUCCESS;

  constructor(public payload: Platform[]) {
  }
}

export class GetAllPlatformsError implements Action {
  readonly type = GET_PLATFORMS_ERROR;

  constructor(public payload: Error) {
  }
}
