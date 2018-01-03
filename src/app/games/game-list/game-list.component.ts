import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import {Game} from '../shared/game';
import {Observable} from 'rxjs/Observable';
import * as gameActions from '../shared/games.actions';
import {getAllGames} from '../shared/games.reducers';
import {PlatformsService} from '../shared/platforms.service';
import {Platform} from '../shared/platform';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: Observable<Game[]>;
  platforms: Platform[] = [];

  constructor(private platformService: PlatformsService,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    console.log('... initializing Hero list component.');

    this.platformService.findAll().subscribe(result => {
      this.platforms = result;
    });
    this.games = this.store.select(getAllGames);
  }

  /**
   * Delete the selected hero
   * @param {number} id the hero id
   */
  delete(id: number) {
    if (confirm('Are you sure do you want to delete this Game?')) {
      this.store.dispatch(new gameActions.RemoveGame(id));
    }
  }
}
