import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GameEditComponent} from './game-edit.component';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {Store, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {PlatformsService} from '../shared/platforms.service';
import {GamesService} from '../shared/games.service';
import * as gamesReducer from '../store/games.reducers';
import * as platformsReducer from '../store/platforms.reducers';
import {MockStore, provideMockStore} from '@ngrx/store/testing';

describe('GameEditComponent', () => {
  let component: GameEditComponent;
  let fixture: ComponentFixture<GameEditComponent>;
  let mockStore: MockStore<{ games: gamesReducer.State, platforms: platformsReducer.State }>;
  const initialState = {
    games: {
      data: [],
      selected: {
        id: 1,
        image: 'horizon_zero_dawn.jpg',
        name: 'Horizon Zero Dawn',
        releaseDate: '2017-02-28',
        platforms: [
          2
        ],
        description: 'Horizon Zero Dawn is an action role-playing video game developed by Guerrilla Games'
      },
      action: 'UPDATE_GAME',
      done: true
    },
    platforms: {
      data: [
        {
          id: 1,
          name: 'Xbox One'
        },
        {
          id: 2,
          name: 'PlayStation 4'
        },
        {
          id: 3,
          name: 'PC'
        }
      ],
      action: 'GET_PLATFORMS',
      done: true
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([]),
        StoreModule.forRoot([]),
        EffectsModule
      ],
      declarations: [
        GameEditComponent
      ],
      providers: [
        GamesService,
        PlatformsService,
        {provide: APP_BASE_HREF, useValue: '/'},
        provideMockStore({initialState})
      ]
    })
      .compileComponents();

    mockStore = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the title 'Game Edition'`, () => {
    expect(component.title).toEqual('Game Edition');
  });

});
