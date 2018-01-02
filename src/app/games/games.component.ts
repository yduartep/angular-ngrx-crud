import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {AppState} from '../app.state';
import {GetAllGames} from './shared/games.actions';
import {getDeleteError, getGamesError, isDeleted} from './shared/games.reducers';

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

    // subscriptions when success or error action
    this.store.select(getGamesError).subscribe((error) => {
      if (error) {
        this.loadingError();
      }
    });
    this.store.select(isDeleted).subscribe((deleted) => {
      if (deleted) {
        this.deleteSuccess();
      }
    });
    this.store.select(getDeleteError).subscribe((error) => {
      if (error) {
        this.deleteError();
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
   * Display success message after delete the hero
   */
  deleteSuccess() {
    alert('The game was deleted successfully!!!');
    this.router.navigate(['/games']);
  }

  /**
   * Display error message is deletion fails
   */
  deleteError() {
    alert('Error while deleting the game');
  }
}
