# Angular Ngrx Crud Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0. This project display a simple list of games that can be updated, removed, viewed and inserted a new one using http services (through HttpClient) and NgRx library to manage the state changes. To edit a game, a dispatch event with the action "UPDATE_GAME" is thrown, the reducer related to the module games is executed and the state is changed updating the information of specific game. An “ngrx effect” class is implemented by module and will be triggered when we dispatch actions with the store. Using some selectors defined in my reducer class we can monitor the success of each action and exceute some specific code after that.

## Mock server

Run `npm run start:mocks` for a mock server. Navigate to `http://localhost:3000/api/games` to obtain the list of games or to `http://localhost:3000/api/platforms` to see the actual list of game platforms.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
