import {Component, OnInit} from '@angular/core';
import {Game} from '../shared/game';
import {ActivatedRoute, Router} from '@angular/router';
import {AppState} from '../../app.state';
import {Store} from '@ngrx/store';
import {GetGame, UpdateGame} from '../shared/games.actions';
import {getGame, getUpdateError, isUpdated} from '../shared/games.reducers';
import {PlatformsService} from '../shared/platforms.service';
import {Platform} from '../shared/platform';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent implements OnInit {
  game: Game;
  platforms: Platform[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private platformService: PlatformsService,
              private store: Store<AppState>) {

  }

  ngOnInit() {
    this.platformService.findAll().subscribe(result => {
      this.platforms = result;
    });

    this.route.params.subscribe(params => {
      this.store.dispatch(new GetGame(+params['id']));
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

    this.store.select(isUpdated).subscribe(updated => {
      if (updated) {
        this.updateSuccess();
      }
    });
    this.store.select(getUpdateError).subscribe(error => {
      if (error) {
        this.updateError();
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
   * Display success message after update the game
   */
  updateSuccess() {
    alert('The game was updated successfully!!');
    this.router.navigate(['/games']);
  }

  /**
   * Display error message if update fails
   */
  updateError() {
    alert('Error while trying to update the game');
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
  }

}
