import {
    GetAllGames,
    GET_GAMES,
    GET_GAMES_SUCCESS,
    GetAllGamesSuccess,
    GetAllGamesError,
    GET_GAMES_ERROR,
    GetGame,
    GET_GAME,
    GetGameSuccess,
    GET_GAME_SUCCESS,
    GetGameError,
    GET_GAME_ERROR,
    AddGame,
    CREATE_GAME,
    AddGameSuccess,
    CREATE_GAME_SUCCESS,
    CREATE_GAME_ERROR,
    AddGameError,
    RemoveGame,
    DELETE_GAME,
    RemoveGameSuccess,
    DELETE_GAME_SUCCESS,
    DELETE_GAME_ERROR,
    RemoveGameError,
    UpdateGame,
    UPDATE_GAME,
    UpdateGameSuccess,
    UPDATE_GAME_ERROR,
    UpdateGameError,
    UPDATE_GAME_SUCCESS
} from './games.actions';
import {Game} from '../shared/game';

const MOCK_DATA: Game[] = [
    {
        id: 1,
        image: 'picture.jpg',
        name: 'Game 1',
        releaseDate: new Date(),
        platforms: [1],
        description: 'Descripion of Game 1'
    }, {
        id: 2,
        image: 'picture2.jpg',
        name: 'Game 2',
        releaseDate: new Date(),
        platforms: [2],
        description: 'Descripion of Game 2'
    }
];
/****************************************
 * GET all the games
 ****************************************/
describe('Load All Games ACTION', () => {
    it('should create the action GET_GAMES', () => {
        const action = new GetAllGames();
        expect({...action}).toEqual({type: GET_GAMES});
    });
    it('should create the action GET_GAMES_SUCCESS', () => {
        const payload = [...MOCK_DATA];
        const action = new GetAllGamesSuccess(payload);
        expect({...action}).toEqual({type: GET_GAMES_SUCCESS, payload});
    });
    it('should create the action GET_GAMES_ERROR', () => {
        const payload = new Error('Error loading all games');
        const action = new GetAllGamesError(payload);
        expect({...action}).toEqual({
            type: GET_GAMES_ERROR, payload
        });
    });
});
/****************************************
 * GET game by id
 ****************************************/
describe('Load specific Game ACTION', () => {
    it('should create the action GET_GAME', () => {
        const payload = MOCK_DATA[0].id;
        const action = new GetGame(payload);
        expect({...action}).toEqual({ type: GET_GAME, payload });
    });
    it('should create the action GET_GAME_SUCCESS', () => {
        const payload = MOCK_DATA[0];
        const action = new GetGameSuccess(payload);
        expect({...action}).toEqual({ type: GET_GAME_SUCCESS, payload });
    });
    it('should create the action GET_GAME_ERROR', () => {
        const payload = new Error('Error loading the game');
        const action = new GetGameError(payload);
        expect({...action}).toEqual({
            type: GET_GAME_ERROR, payload
        });
    });
});

/****************************************
 * ADD new game
 ****************************************/
describe('Create new Game ACTION', () => {
    it('should create the action CREATE_GAME', () => {
        const payload = MOCK_DATA[1];
        const action = new AddGame(payload);
        expect({...action}).toEqual({
            type: CREATE_GAME, payload
        });
    });
    it('should create the action CREATE_GAME_SUCCESS', () => {
        const payload = MOCK_DATA[1].id;
        const action = new AddGameSuccess(payload);
        expect({...action}).toEqual({ type: CREATE_GAME_SUCCESS, payload });
    });
    it('should create the action CREATE_GAME_ERROR', () => {
        const payload = new Error('Error while adding a new game');
        const action = new AddGameError(payload);
        expect({...action}).toEqual({ type: CREATE_GAME_ERROR, payload });
    });
});
/****************************************
 * REMOVE a game by id
 ****************************************/
describe('Remove a Game ACTION', () => {
    it('should create the action DELETE_GAME', () => {
        const payload = MOCK_DATA[1].id;
        const action = new RemoveGame(payload);
        expect({...action}).toEqual({ type: DELETE_GAME, payload });
    });
    it('should create the action DELETE_GAME_SUCCESS', () => {
        const payload = MOCK_DATA[1];
        const action = new RemoveGameSuccess(payload);
        expect({...action}).toEqual({ type: DELETE_GAME_SUCCESS, payload });
    });
    it('should create the action DELETE_GAME_ERROR', () => {
        const payload = new Error('Error removing game.');
        const action = new RemoveGameError(payload);
        expect({...action}).toEqual({ type: DELETE_GAME_ERROR, payload });
    });
});
/****************************************
 * UPDATE game by id
 ****************************************/
describe('Update a Game ACTION', () => {
    it('should create the action UPDATE_GAME', () => {
        const payload = MOCK_DATA[0];
        const action = new UpdateGame(payload);
        expect({...action}).toEqual({ type: UPDATE_GAME, payload });
    });
    it('should create the action UPDATE_GAME_SUCCESS', () => {
        const action = new UpdateGameSuccess();
        expect({...action}).toEqual({type: UPDATE_GAME_SUCCESS});
    });
    it('should create the action UPDATE_GAME_ERROR', () => {
        const payload = new Error('Error updating game.');
        const action = new UpdateGameError(payload);
        expect({...action}).toEqual({
            type: UPDATE_GAME_ERROR, payload
        });
    });
});
