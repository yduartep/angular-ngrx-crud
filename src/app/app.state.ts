import * as fromGames from './games/store/games.reducers';
import * as fromPlatforms from './games/store/platforms.reducers';

export interface AppState {
  games: fromGames.State;
  platforms: fromPlatforms.State;
}
