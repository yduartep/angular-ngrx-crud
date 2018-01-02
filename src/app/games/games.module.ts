import {NgModule} from '@angular/core';
import {GamesService} from './shared/games.service';
import {gamesRoutedComponents, GamesRoutingModule} from './games-routing.module';
import {SharedModule} from '../shared/shared.module';
import {PlatformsService} from './shared/platforms.service';

@NgModule({
  imports: [
    SharedModule,
    GamesRoutingModule
  ],
  declarations: [gamesRoutedComponents],
  providers: [
    GamesService, PlatformsService
  ]
})
export class GamesModule {
}
