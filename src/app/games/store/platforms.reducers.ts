import * as platformsActions from './platforms.actions';
import {AppAction} from '../../app.action';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Platform} from '../shared/platform';

export interface State {
  data: Platform[];
  action: string;
  done: boolean;
  error?: Error;
}

const initialState: State = {
  data: [],
  action: null,
  done: false,
  error: null
};

export function reducer(state = initialState, action: AppAction): State {
  // ...state create immutable state object
  switch (action.type) {
    /*************************
     * GET all platforms actions
     ************************/
    case platformsActions.GET_PLATFORMS:
      return {...state, action: platformsActions.GET_PLATFORMS, done: false};
    case platformsActions.GET_PLATFORMS_SUCCESS:
      return {...state, data: action.payload, done: true};
    case platformsActions.GET_PLATFORMS_ERROR:
      return {...state, done: true, error: action.payload};
  }
  return state;
}

/*************************
 * SELECTORS
 ************************/
export const getPlatformsState = createFeatureSelector<State>('platforms');
export const getAllPlatforms = createSelector(getPlatformsState, (state: State) => state.data);

