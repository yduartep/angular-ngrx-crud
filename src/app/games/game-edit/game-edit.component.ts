import {Component, OnInit} from '@angular/core';
import {Game} from '../shared/game';
import {ActivatedRoute, Router} from '@angular/router';
import {AppState} from '../../app.state';
import {Store} from '@ngrx/store';
import {GetGame, UpdateGame} from '../store/games.actions';
import {getGame} from '../store/games.reducers';
import {Platform} from '../shared/platform';
import {getAllPlatforms} from '../store/platforms.reducers';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent implements OnInit {
  title = 'Game Edition';
  game: Game;
  platforms: Platform[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<AppState>) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.store.dispatch(new GetGame(+params['id']));
    });
    this.store.select(getAllPlatforms).subscribe(result => {
      this.platforms = result;
    });
    this.store.select(getGame).subscribe(game => {
      if (game != null) {
        this.game = game;
        this.platforms = this.platforms.map(p => {
          p.checked = game.platforms.indexOf(p.id) >= 0;
          return p;
        });
      }
    });
  }

  /**
   * Create a new game
   */
  onSaveGame() {
    this.game.platforms = this.platforms
      .filter((p) => p.checked === true)
      .map(p => p.id);
    this.store.dispatch(new UpdateGame(this.game));
  }

  /**
   * If user is in view mode, back to edit mode else go to games page
   */
  onBack() {
    this.router.navigate(['/games']);
  }

  /**
   * Reset all fields in the form
   */
  reset() {
    this.game.image = '';
    this.game.name = '';
    this.game.description = '';
    this.game.releaseDate = null;
  }

}
