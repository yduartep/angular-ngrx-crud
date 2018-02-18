import {State, reducer} from './games.reducers';
import {
    GET_GAMES,
    GetAllGames,
    GetAllGamesSuccess,
    GET_GAMES_ERROR,
    GetAllGamesError,
    GetGame,
    GET_GAME,
    GetGameSuccess,
    GetGameError,
    CREATE_GAME,
    CREATE_GAME_ERROR,
    AddGameSuccess,
    AddGameError,
    AddGame,
    UPDATE_GAME,
    UpdateGame,
    UpdateGameSuccess,
    UpdateGameError,
    DELETE_GAME,
    RemoveGame,
    RemoveGameSuccess,
    RemoveGameError
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

let state: State = {
    data: [],
    selected: null,
    action: null,
    done: false,
    error: null
};

describe('Load all Games REDUCER', () => {
    it('should reduce the action GET_GAMES', () => {
        const action = new GetAllGames();
        const newState = reducer(state, action);
        expect({ ...newState }).toEqual({
            ...state,
            action: GET_GAMES,
            done: false
        });
        state = newState;
    });
    it('should reduce the action GET_GAMES_SUCCESS', () => {
        const payload = [...MOCK_DATA];
        const action = new GetAllGamesSuccess(payload);
        const newState = reducer(state, action);
        expect({ ...newState }).toEqual({
            ...state,
            data: payload,
            done: true
        });
        state = newState;
    });
    it('should reduce the action GET_GAMES_ERROR', () => {
        const payload = new Error('Error loading all games');
        const action = new GetAllGamesError(payload);
        const newState = reducer(state, action);
        expect({ ...newState }).toEqual({
            ...state,
            done: true,
            error: action.payload
        });
    });
});

describe('GET Game by id REDUCER', () => {
    it('should reduce the action GET_GAME', () => {
        const payload = MOCK_DATA[0].id;
        const action = new GetGame(payload);
        const newState = reducer(state, action);
        expect({...newState}).toEqual({
            ...state,
            action: GET_GAME,
            done: false
        });
        state = newState;
    });
    it('should reduce the action GET_GAME_SUCCESS', () => {
        const payload = MOCK_DATA[0];
        const action = new GetGameSuccess(payload);
        const newState = reducer(state, action);
        expect({...newState}).toEqual({
            ...state,
            selected: payload,
            done: true
        });
        state = {...state, selected: null, done: true};
    });
    it('should reduce the action GET_GAME_ERROR', () => {
        const payload = new Error('Error loading the game');
        const action = new GetGameError(payload);
        const newState = reducer(state, action);
        expect({...newState }).toEqual({
            ...state,
            done: true,
            error: action.payload
        });
    });
});

describe('Create new game REDUCER', () => {
    it('should reduce the action CREATE_GAME', () => {
        const payload = {
            id: 3,
            image: 'picture3.jpg',
            name: 'Game 3',
            releaseDate: new Date(),
            platforms: [1, 2],
            description: 'Descripion of Game 3'
        };
        const action = new AddGame(payload);
        const newState = reducer(state, action);
        expect({...newState}).toEqual({
            ...state,
            selected: payload,
            action: CREATE_GAME,
            done: false
        });
        state = newState;
    });
    it('should reduce the action CREATE_GAME_SUCCESS', () => {
        const payload = 3;
        const action = new AddGameSuccess(payload);
        const newState = reducer(state, action);
        expect({...newState}).toEqual({
            ...state,
            data: [
                ...state.data,
                {
                    ...state.selected,
                    id: payload
                }
            ],
            selected: null,
            done: true
        });
        state = {...state, selected: null, done: true};
    });
    it('should reduce the action CREATE_GAME_ERROR', () => {
        const payload = new Error('Error creating the game');
        const action = new AddGameError(payload);
        const newState = reducer(state, action);
        expect({...newState}).toEqual({
            ...state,
            selected: null,
            done: true,
            error: payload
        });
    });
});

describe('Update existing game REDUCER', () => {
    it('should reduce the action UPDATE_GAME', () => {
        const payload = {...MOCK_DATA[0], description: 'Descripion of Game 1 edited'};
        const action = new UpdateGame(payload);
        const newState = reducer(state, action);
        expect({ ...newState}).toEqual({
            ...state,
            selected: payload,
            action: UPDATE_GAME,
            done: false
        });
        state = newState;
    });
    it('should reduce the action UPDATE_GAME_SUCCESS', () => {
        const index = 0;
        const data = [
            ...state.data.slice(0, index),
            state.selected,
            ...state.data.slice(index + 1)
        ];
        const action = new UpdateGameSuccess();
        const newState = reducer(state, action);
        expect({...newState}).toEqual({...state, data, done: true, selected: null, error: null});
        state = {...state, selected: null, done: true};
    });
    it('should reduce the action UPDATE_GAME_ERROR', () => {
        const payload = new Error('Error updating the game');
        const action = new UpdateGameError(payload);
        const newState = reducer(state, action);
        expect({...newState}).toEqual({...state, done: true, error: payload});
    });
});

describe('Deleting existing game REDUCER', () => {
    it('should reduce the action DELETE_GAME', () => {
        const selected = MOCK_DATA[1];
        const payload = selected.id;
        const action = new RemoveGame(payload);
        const newState = reducer(state, action);

        expect({ ...newState}).toEqual({
            ...state,
            selected,
            action: DELETE_GAME,
            done: false
        });
        state = newState;
    });
    it('should reduce the action DELETE_GAME_SUCCESS', () => {
        const payload = MOCK_DATA[1];
        const action = new RemoveGameSuccess(payload);
        const data = state.data.filter(h => h.id !== state.selected.id);
        const newState = reducer(state, action);
        expect({...newState}).toEqual( {...state, data, selected: null, done: true});
        state = {...state, selected: null, done: true};
    });
    it('should reduce the action DELETE_GAME_ERROR', () => {
        const payload = new Error('Error while deleting the game');
        const action = new RemoveGameError(payload);
        const newState = reducer(state, action);
        expect({...newState}).toEqual({...state, done: true, error: payload});
    });
});
