import {Component, OnInit} from '@angular/core';
import {Game} from '../shared/game';
import {Platform} from '../shared/platform';
import {PlatformsService} from '../shared/platforms.service';
import {AppState} from '../../app.state';
import {Store} from '@ngrx/store';
import {AddGame} from '../store/games.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {
  title = 'Create new game';
  game: Game = new Game();
  platforms: Platform[] = [];

  constructor(private router: Router,
              private platformService: PlatformsService,
              private store: Store<AppState>) {

  }

  ngOnInit() {
    this.platformService.findAll().subscribe(result => {
      this.platforms = result;
    });
  }

  /**
   * If user is in view mode, back to edit mode else go to games page
   */
  onBack() {
    this.router.navigate(['/games']);
  }

  /**
   * Create a new hero
   */
  onSaveGame() {
    this.game.platforms = this.platforms
      .filter((p) => p.checked === true)
      .map(p => p.id);
    this.store.dispatch(new AddGame(this.game));
  }

  reset() {
    this.game.name = '';
    this.game.releaseDate = null;
    this.game.description = '';
    this.game.platforms = [];
  }
}
