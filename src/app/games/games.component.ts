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
    this.store.select(getGamesError).subscribe((error) => this.loadingError(error));
    this.store.select(isDeleted).subscribe((done) => {
      this.actionSuccess(done, 'The game was deleted successfully!!!');
    });
    this.store.select(getDeleteError).subscribe((error) => {
      this.actionError(error, 'Error while deleting the game');
    });
    this.store.select(isUpdated).subscribe((done) => {
      this.actionSuccess(done, 'The game was updated successfully!!!');
    });
    this.store.select(getUpdateError).subscribe((error) => {
      this.actionError(error, 'Error while updating the game');
    });
    this.store.select(isCreated).subscribe((done) => {
      this.actionSuccess(done, 'The game was created successfully!!!');
    });
    this.store.select(getCreateError).subscribe((error) => {
      this.actionError(error, 'Error while creating the game');
    });
  }

  /**
   * Display error message if load of games fails
   */
  loadingError(error) {
    if (error) {
      alert('Error while loading the list of games');
    }
  }

  /**
   * Display success message after execute specific action over the game
   * @param done true if action was completed or false
   * @param message the message to be displayed
   */
  actionSuccess(done: boolean, message: string) {
    if (done) {
      alert(message);
      this.router.navigate(['/games']);
    }
  }

  /**
   * Display error message is execution of action fails
   * @param error the error thrown
   * @param message the message to be displayed
   */
  actionError(error, message: string) {
    if (error) {
      alert(message);
    }
  }
}
