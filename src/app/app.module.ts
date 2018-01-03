import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';

// ngrx elements
import * as gamesReducer from './games/store/games.reducers';
import * as platformsReducer from './games/store/platforms.reducers';
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

export const reducers: ActionReducerMap<any> = {
  games: gamesReducer.reducer,
  platforms: platformsReducer.reducer
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
