import * as fromGames from './games/shared/games.reducers';

export interface AppState {
  games: fromGames.State;
}
