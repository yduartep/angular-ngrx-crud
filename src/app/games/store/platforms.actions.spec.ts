import {
    GetAllPlatforms,
    GET_PLATFORMS,
    GetAllPlatformsSuccess,
    GET_PLATFORMS_SUCCESS,
    GetAllPlatformsError,
    GET_PLATFORMS_ERROR
} from './platforms.actions';
import {Platform} from '../shared/platform';

const MOCK_DATA: Platform[] = [
    {
        'id': 1,
        'name': 'Xbox One',
        checked: false
    }, {
        'id': 2,
        'name': 'PlayStation 4',
        checked: false
    }, {
        'id': 3,
        'name': 'PC',
        checked: false
    }
];

describe('Load All Platforms ACTION', () => {
    it('should create the action GET_PLATFORMS', () => {
        const action = new GetAllPlatforms();
        expect({...action}).toEqual({type: GET_PLATFORMS});
    });
    it('should create the action GET_PLATFORMS_SUCCESS', () => {
        const payload = [...MOCK_DATA];
        const action = new GetAllPlatformsSuccess(payload);
        expect({...action}).toEqual({type: GET_PLATFORMS_SUCCESS, payload});
    });
    it('should create the action GET_PLATFORMS_ERROR', () => {
        const payload = new Error('Error loading all platforms');
        const action = new GetAllPlatformsError(payload);
        expect({...action}).toEqual({type: GET_PLATFORMS_ERROR, payload});
    });
});
