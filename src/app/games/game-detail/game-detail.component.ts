import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppState} from '../../app.state';
import {Store} from '@ngrx/store';
import {GetGame} from '../store/games.actions';
import {Observable} from 'rxjs/Observable';
import {Game} from '../shared/game';
import * as gameActions from '../store/games.actions';
import {getGame} from '../store/games.reducers';
import {Platform} from '../shared/platform';
import {getAllPlatforms} from '../store/platforms.reducers';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  title = 'Game Details';
  game: Observable<Game>;
  platforms: Observable<Platform[]>;

  constructor(private route: ActivatedRoute,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.store.dispatch(new GetGame(+params['id']));
    });
    this.platforms = this.store.select(getAllPlatforms);
    this.game = this.store.select(getGame);
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
