import {Component, OnInit} from '@angular/core';
import {Game} from '../shared/game';
import {Platform} from '../shared/platform';
import {PlatformsService} from '../shared/platforms.service';
import {AppState} from '../../app.state';
import {Store} from '@ngrx/store';
import {AddGame} from '../shared/games.actions';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {
  game: Game = new Game();
  platforms: Platform[] = [];

  constructor(private platformService: PlatformsService,
              private store: Store<AppState>) {

  }

  ngOnInit() {
    this.platformService.findAll().subscribe(result => {
      this.platforms = result;
    });
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
    this.game.image = '';
    this.game.name = '';
    this.game.releaseDate = null;
    this.game.description = '';
    this.game.platforms = [];
  }
}
