import {NgModule} from '@angular/core';
import {GamesService} from './shared/games.service';
import {gamesRoutedComponents, GamesRoutingModule} from './games-routing.module';
import {SharedModule} from '../shared/shared.module';
import {PlatformsService} from './shared/platforms.service';

// ngrx elements
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {GameEffects} from './store/games.effects';
import * as gameReducer from './store/games.reducers';
import * as platformReducer from './store/platforms.reducers';
import {PlatformEffects} from './store/platforms.effects';

@NgModule({
  imports: [
    SharedModule,
    GamesRoutingModule,
    StoreModule.forFeature('games', gameReducer.reducer),
    StoreModule.forFeature('platforms', platformReducer.reducer),
    EffectsModule.forRoot([GameEffects, PlatformEffects])
  ],
  declarations: [gamesRoutedComponents],
  providers: [
    GamesService, PlatformsService
  ]
})
export class GamesModule {
}
