import {NgModule} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

// components
import {GamesComponent} from './games.component';
import {GameListComponent} from './game-list/game-list.component';
import {GameCreateComponent} from './game-create/game-create.component';
import {GameDetailComponent} from './game-detail/game-detail.component';
import {GameEditComponent} from './game-edit/game-edit.component';

export const gamesRoutes: Routes = <Routes>[{
  path: '',
  component: GamesComponent,
  children: [
    {path: '', component: GameListComponent},
    {path: 'detail/:id', component: GameDetailComponent},
    {path: 'create', component: GameCreateComponent},
    {path: 'edit/:id', component: GameEditComponent}
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(gamesRoutes)
  ],
  exports: [RouterModule]
})
export class GamesRoutingModule {
}

export const gamesRoutedComponents = [
  GamesComponent,
  GameListComponent,
  GameDetailComponent,
  GameCreateComponent,
  GameEditComponent
];
