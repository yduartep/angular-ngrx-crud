import * as gameActions from './games.actions';
import {AppAction} from '../../app.action';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Game} from './game';

export interface State {
  data: Game[];
  selected: Game;
  action: string;
  done: boolean;
  error?: Error;
}

const initialState: State = {
  data: [],
  selected: null,
  action: null,
  done: false,
  error: null
};

export function reducer(state = initialState, action: AppAction): State {
  // ...state create immutable state object
  switch (action.type) {
    /*************************
     * GET all games actions
     ************************/
    case gameActions.GET_GAMES: return {...state, action: gameActions.GET_GAMES, done: false};
    case gameActions.GET_GAMES_SUCCESS: return {...state, data: action.payload, done: true};
    case gameActions.GET_GAMES_ERROR: return {...state, done: false, error: action.payload};

    /*************************
     * GET game by id actions
     ************************/
    case gameActions.GET_GAME: return {...state, action: gameActions.GET_GAME, done: false};
    case gameActions.GET_GAME_SUCCESS: return {...state, selected: action.payload, done: true};
    case gameActions.GET_GAME_ERROR: return {...state, selected: null, done: false, error: action.payload};

    /*************************
     * CREATE game actions
     ************************/
    case gameActions.CREATE_GAME: return {...state, selected: action.payload, action: gameActions.CREATE_GAME, done: false};
    case gameActions.CREATE_GAME_SUCCESS: {
      const newGame = {...state.selected, id: action.payload};
      const data = [...state.data, newGame];
      return {...state, data, selected: null, done: true};
    }
    case gameActions.CREATE_GAME_ERROR: return {...state, selected: null, done: false, error: action.payload};

    /*************************
     * UPDATE game actions
     ************************/
    case gameActions.UPDATE_GAME: return {...state, selected: action.payload, action: gameActions.UPDATE_GAME, done: false};
    case gameActions.UPDATE_GAME_SUCCESS: {
      const index = state.data.findIndex(h => h.id === state.selected.id);
      if (index >= 0) {
        const data = [...state.data.slice(0, index), state.selected, ...state.data.slice(index + 1)];
        return {...state, data, done: true};
      }
      return state;
    }
    case gameActions.UPDATE_GAME_ERROR: return {...state, done: false, error: action.payload};

    /*************************
     * DELETE game actions
     ************************/
    case gameActions.DELETE_GAME: {
      const selected = state.data.find(h => h.id === action.payload);
      return {...state, selected, action: gameActions.DELETE_GAME, done: false};
    }
    case gameActions.DELETE_GAME_SUCCESS: {
      const data = state.data.filter(h => h.id !== state.selected.id);
      return {...state, data, selected: null, done: true};
    }
    case gameActions.DELETE_GAME_ERROR: return {...state, selected: null, done: false, error: action.payload};
  }
  return state;
}

/*************************
 * SELECTORS
 ************************/
export const getGamesState = createFeatureSelector<State>('games');
export const getAllGames = createSelector(getGamesState, (state: State) => state.data);
export const getGame = createSelector(getGamesState, (state: State) => {
  if (state.action === gameActions.GET_GAME && state.done) {
    return state.selected;
  } else {
    return null;
  }

});
export const isDeleted = createSelector(getGamesState, (state: State) => state.action === gameActions.DELETE_GAME && state.done);
export const isCreated = createSelector(getGamesState, (state: State) => state.action === gameActions.CREATE_GAME && state.done);
export const isUpdated = createSelector(getGamesState, (state: State) => state.action === gameActions.UPDATE_GAME && state.done);

export const getDeleteError = createSelector(getGamesState, (state: State) => {
  return state.action === gameActions.DELETE_GAME ? state.error : null;
});
export const getCreateError = createSelector(getGamesState, (state: State) => {
  return state.action === gameActions.CREATE_GAME ? state.error : null;
});
export const getUpdateError = createSelector(getGamesState, (state: State) => {
  return state.action === gameActions.UPDATE_GAME ? state.error : null;
});
export const getGamesError = createSelector(getGamesState, (state: State) => {
  return state.action === gameActions.GET_GAMES ? state.error : null;
});
export const getGameError = createSelector(getGamesState, (state: State) => {
  return state.action === gameActions.GET_GAME ? state.error : null;
});
