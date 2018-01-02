import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// components
import {PageNotFoundComponent} from './shared/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/games', pathMatch: 'full'},
  {
    path: 'games',
    loadChildren: 'app/games/games.module#GamesModule'
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
