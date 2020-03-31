import { INCREMENT, DECREMENT } from '../constants/counter';
import { increment, decrement } from './counter';

describe('counter actions', () => {
    it('should create an increment action', () => {
        const expectedAction = {
            type: INCREMENT,
            payload: {
                value: 1,
            },
        };

        expect(increment(1)).toEqual(expectedAction);
    });

    it('should create a decrement action', () => {
        const expectedAction = {
            type: DECREMENT,
            payload: {
                value: 1,
            },
        };

        expect(decrement(1)).toEqual(expectedAction);
    });
});