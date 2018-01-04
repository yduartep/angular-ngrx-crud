import {NgModule} from '@angular/core';
import {GamesService} from './shared/games.service';
import {gamesRoutedComponents, GamesRoutingModule} from './games-routing.module';
import {SharedModule} from '../shared/shared.module';
import {PlatformsService} from './shared/platforms.service';

// ngrx elements
import {StoreModule, ActionReducerMap} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {GameEffects} from './store/games.effects';
import * as gameReducer from './store/games.reducers';
import * as platformReducer from './store/platforms.reducers';
import {PlatformEffects} from './store/platforms.effects';

export const reducers: ActionReducerMap<any> = {
  games: gameReducer.reducer,
  platforms: platformReducer.reducer
};

@NgModule({
  imports: [
    SharedModule,
    GamesRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([GameEffects, PlatformEffects])
  ],
  declarations: [gamesRoutedComponents],
  providers: [
    GamesService, PlatformsService
  ]
})
export class GamesModule {
}
