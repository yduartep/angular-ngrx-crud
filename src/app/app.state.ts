import * as fromGames from './games/store/games.reducers';

export interface AppState {
  games: fromGames.State;
}
