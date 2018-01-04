import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GamesComponent} from './games.component';
import {GamesService} from './shared/games.service';
import {PlatformsService} from './shared/platforms.service';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {Store} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {MockStore} from './store/mock-store';

describe('GamesComponent', () => {
  let component: GamesComponent;
  let fixture: ComponentFixture<GamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([]),
        EffectsModule
      ],
      declarations: [
        GamesComponent
      ],
      providers: [
        GamesService,
        PlatformsService,
        {provide: APP_BASE_HREF, useValue: '/'},
        {
          provide: Store, useValue: new MockStore({
          games: {
            data: [
              {
                'id': 1,
                'image': 'horizon_zero_dawn.jpg',
                'name': 'Horizon Zero Dawn',
                'releaseDate': '2017-02-28',
                'platforms': [
                  2
                ],
                'description': 'Horizon Zero Dawn is an action role-playing video game developed by Guerrilla'
              }, {
                'id': 2,
                'image': 'destiny2.jpg',
                'name': 'Destiny 2',
                'releaseDate': '2017-09-06',
                'platforms': [
                  1,
                  2,
                  3
                ],
                'description': 'Destiny 2 is an online-only multiplayer first-person shooter video game developed by Bungie'
              }
            ],
            selected: null,
            action: 'GET_GAMES',
            done: true
          }
        })
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
