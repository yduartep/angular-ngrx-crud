import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {AppState} from '../app.state';
import {GetAllGames} from './store/games.actions';
import {
  getCreateError, getDeleteError, getGamesError, getUpdateError, isCreated, isDeleted,
  isUpdated
} from './store/games.reducers';
import {GetAllPlatforms} from './store/platforms.actions';

@Component({
  selector: 'app-games',
  template: `
    <router-outlet></router-outlet>`,
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(private router: Router,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    console.log('... Initializing Heroes component');
    this.store.dispatch(new GetAllGames());
    this.store.dispatch(new GetAllPlatforms());

    // subscriptions when success or error action
    this.store.select(getGamesError).subscribe((error) => {
      if (error) {
        this.loadingError();
      }
    });
    this.store.select(isDeleted).subscribe((deleted) => {
      if (deleted) {
        this.actionSuccess('deleted');
      }
    });
    this.store.select(getDeleteError).subscribe((error) => {
      if (error) {
        this.actionError('deleting');
      }
    });
    this.store.select(isUpdated).subscribe((updated) => {
      if (updated) {
        this.actionSuccess('updated');
      }
    });
    this.store.select(getUpdateError).subscribe((error) => {
      if (error) {
        this.actionError('updating');
      }
    });
    this.store.select(isCreated).subscribe((created) => {
      if (created) {
        this.actionSuccess('created');
      }
    });
    this.store.select(getCreateError).subscribe((error) => {
      if (error) {
        this.actionError('creating');
      }
    });
  }

  /**
   * Display error message if load of games fails
   */
  loadingError() {
    alert('Error while loading the list of games');
  }

  /**
   * Display success message after execute specific action over the game
   */
  actionSuccess(action) {
    alert('The game was ' + action + ' successfully!!!');
    this.router.navigate(['/games']);
  }

  /**
   * Display error message is execution of action fails
   */
  actionError(action) {
    alert('Error while ' + action + ' the game');
  }
}
