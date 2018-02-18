import {State, reducer} from './platforms.reducers';
import { Platform } from '../shared/platform';
import { GetAllPlatforms, GET_PLATFORMS, GetAllPlatformsSuccess, GetAllPlatformsError } from './platforms.actions';

const MOCK_DATA: Platform[] = [
    {
        'id': 1,
        'name': 'Xbox One',
        'checked': false
    }, {
        'id': 2,
        'name': 'PlayStation 4',
        'checked': false
    }, {
        'id': 3,
        'name': 'PC',
        'checked': false
    }
];

let state: State = {
    data: [],
    action: null,
    done: false,
    error: null
};

describe('Load all Platforms REDUCER', () => {
    it('should reduce the action GET_PLATFORMS', () => {
        const action = new GetAllPlatforms();
        const newState = reducer(state, action);
        expect({ ...newState }).toEqual({
            ...state,
            action: GET_PLATFORMS,
            done: false
        });
        state = newState;
    });
    it('should reduce the action GET_PLATFORMS_SUCCESS', () => {
        const payload = [...MOCK_DATA];
        const action = new GetAllPlatformsSuccess(payload);
        const newState = reducer(state, action);
        expect({ ...newState }).toEqual({
            ...state,
            data: payload,
            done: true
        });
        state = newState;
    });
    it('should reduce the action GET_PLATFORMS_ERROR', () => {
        const payload = new Error('Error loading all platforms');
        const action = new GetAllPlatformsError(payload);
        const newState = reducer(state, action);
        expect({ ...newState }).toEqual({
            ...state,
            done: true,
            error: action.payload
        });
    });
});
