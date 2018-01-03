import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GameDetailComponent} from './game-detail.component';
import {ExtractNamesPipe} from '../../shared/extract-names.pipe';
import {Router, RouterModule} from '@angular/router';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {PlatformsService} from '../shared/platforms.service';
import {GamesService} from '../shared/games.service';
import {EffectsModule} from '@ngrx/effects';
import {ActionReducerMap, Store, StoreModule} from '@ngrx/store';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import * as gamesReducer from '../../games/store/games.reducers';
import {Game} from '../shared/game';
import {MockStore} from '../store/mock-store';

export const reducers: ActionReducerMap<any> = {
  games: gamesReducer.reducer
};

describe('GameDetailComponent', () => {
  let component: GameDetailComponent;
  let fixture: ComponentFixture<GameDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([]),
        EffectsModule.forRoot([])
      ],
      declarations: [
        GameDetailComponent,
        ExtractNamesPipe
      ],
      providers: [
        GamesService,
        PlatformsService,
        {provide: APP_BASE_HREF, useValue: '/'},
        {
          provide: Store, useValue: new MockStore({
          games: {
            data: [],
            selected: {
              'id': 1,
              'image': 'horizon_zero_dawn.jpg',
              'name': 'Horizon Zero Dawn',
              'releaseDate': '2017-02-28',
              'platforms': [
                2
              ],
              'description': 'Horizon Zero Dawn is an action role-playing video game developed by Guerrilla Games'
            },
            action: 'GET_GAME',
            done: true
          },
          platforms: {
            data: [
              {
                'id': 1,
                'name': 'Xbox One'
              },
              {
                'id': 2,
                'name': 'PlayStation 4'
              },
              {
                'id': 3,
                'name': 'PC'
              }
            ],
            action: 'GET_PLATFORMS',
            done: true
          }
        })
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the title 'Game Details'`, () => {
    expect(component.title).toEqual('Game Details');
  });
});
